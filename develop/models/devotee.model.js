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
			id:{
				type:Number
			},
			name:{
				type:String
			},
			iso2:{
				type:String
			},
			iso3:{
				type:String
			},
			phonecode:{
				type:Number
			},
			capital:{
				type:String
			},
			currency:{
				type:String
			},
			native:{
				type:String
			},
			emoji:{
				type:String
			},
    },
    state: {
			id:{
				type:Number
			},
			iso2:{
				type:String
			},
			name:{
				type:String
			},
    },
		city: {
			id:{
				type:Number
			},
			latitude:{
				type:String
			},
			longitude:{
				type:String
			},
			name:{
				type:String
			},
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
