import mongoose from "mongoose";

const devoteeSchema = new mongoose.Schema(
	{
    firstName: {
      type: String,
      required: true,
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
		email:{
			type: String,
		},
		weight:{
			type:Number
		},
		height:{
			type:Number
		},
		address1:{
			type:String
		},
		address2:{
			type:String
		},
		landMark:{
			type:String
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
