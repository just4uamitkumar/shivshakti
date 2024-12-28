import mongoose from "mongoose";

const jyotirlingSchema = new mongoose.Schema(
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
			type:Date,
			required:true
		},
		mobile: {
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
		zipcode: {
      type: String,
      required: true,
    },
		qualification: {
      type: Number,
      required: true,
    },
		{
			timestamp: true,
		}
  },

);

const Jyotirling = mongoose.model("Jyotirling", jyotirlingSchema);

export default Jyotirling;
