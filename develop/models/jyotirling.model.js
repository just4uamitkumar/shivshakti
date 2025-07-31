import mongoose from "mongoose";

const jyotirlingSchema = new mongoose.Schema(
	{
    name: {
      type: String,
      required: true,
    },
		city:{
			type:String,
			required:true,
		},
    state: {
      type: String,
      required: true,
    },
    imgPath: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
    },
		history:{
			type:String,
		}
  },
  {
    timestamp: true,
  }
);

const Jyotirling = mongoose.model("Jyotirling", jyotirlingSchema);

export default Jyotirling;
