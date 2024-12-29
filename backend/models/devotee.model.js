import mongoose from "mongoose";

const devoteeSchema = new mongoose.Schema(
	{
    firstName: {
      type: String,
      required: true,
    },
		middleName:{
			type:String,
		},
		lastName:{
			type:String,
		},
		birthDate:{
			type:String,
		},
		mobile: {
      type: String,
      required: true,
    },
		country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
		city: {
      type: String,
      required: true,
    },
		zipCode: {
      type: String,
    },
		qualification: {
      type: String,
    },
		hobbies: {
			type: String,
		},
	comments: {
			type: String,
		},
	},
	{
		timestamp: true,
	}
);

const Devotee = mongoose.model("Devotee", devoteeSchema);

export default Devotee;
