import mongoose from "mongoose";
import Devotee from "../models/devotee.model.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getDevotee = catchAsyncError(async (req, res, next) => {
  try {
    const people = await Devotee.find({});
    res.status(200).json({ success: true, data: people });
  } catch (error) {
    console.log("error in fetching products:", error.message);
    return next(new ErrorHandler("Server Error", 500));
  }
});

export const addDevotee = catchAsyncError(async (req, res, next) => {
  const person = req.body; // user will send this data

  if (!person.firstName || !person.mobile) {
    return next(new ErrorHandler("Please provide all fields", 400));
  }

  const newPerson = new Devotee(person);

  try {
    await newPerson.save();
    res.status(201).json({ success: true, data: newPerson });
  } catch (error) {
    console.error("Error in added devotee:", error.message);
    return next(new ErrorHandler("Server Error", 500));
  }
});

export const updateDevotee = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const person = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler("Invalid Devotee Id", 404));
  }

  try {
    const updatePerson = await Devotee.findByIdAndUpdate(id, person, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatePerson });
  } catch (error) {
    return next(new ErrorHandler("Server Error", 500));
  }
});

export const deleteDevotee = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler("Invalid Devotee Id", 404));
  }

  try {
    await Devotee.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Devotee deleted" });
  } catch (error) {
    console.log("error in deleting product:", error.message);
    return next(new ErrorHandler("Server Error", 500));
  }
});
