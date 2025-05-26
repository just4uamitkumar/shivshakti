import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
    minLength: [3, "First Name must be at least 3 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
    minLength: [2, "Last Name must be at least 2 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: validator.isEmail,
  },

  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Password must be at least 6 characters"],
    select: false,
  },

  mobile: {
    type: Number,
    default: null,
  },

  address: {
    addressLine1: {
      type: String,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
    country: {
      type: String,
    }
  },

  role: {
    type: String,
    enum: ["superAdmin", "admin", "proUser", "user" ],
    default: "user",
  },

  subscription: {
    id: String,
    status: String,
  },

  profilePic:{
    type:String,
  },

  avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },

  playlist: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
      poster: String,
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: String,
});

schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

schema.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

schema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

schema.methods.getResetToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

export const User = mongoose.model("User", schema);
