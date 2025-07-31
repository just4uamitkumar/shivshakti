import mongoose from "mongoose";
import Jyotirling from "../models/jyotirling.model.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getJyotirling = catchAsyncError(async (req, res, next) => {
  try {
    const temple = await Jyotirling.find({});
    res.status(200).json({ success: true, data: temple });
  } catch (error) {
    console.log("error in fetching products:", error.message);
    return next(new ErrorHandler("Server Error", 500));
  }
});

export const createJyotirling = catchAsyncError(async (req, res, next) => {
  const temple = req.body; // user will send this data

  if (!temple.name || !temple.city || !temple.state) {
    return next(new ErrorHandler("Please provide all fields", 400));
  }

  const newTemple = new Jyotirling(temple);

  try {
    await newTemple.save();
    res.status(201).json({ success: true, data: newTemple });
  } catch (error) {
    console.error("Error in added temple:", error.message);
    return next(new ErrorHandler("Server Error", 500));
  }
});

export const updateJyotirling = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const temple = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler("Invalid Temple Id", 404));
  }

  try {
    const updatedTemple = await Jyotirling.findByIdAndUpdate(id, temple, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedTemple });
  } catch (error) {
    return next(new ErrorHandler("Server Error", 500));
  }
});

export const deleteJyotirling = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler("Invalid Tmple Id", 404));
  }

  try {
    await Jyotirling.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Temple deleted" });
  } catch (error) {
    console.log("error in deleting product:", error.message);
    return next(new ErrorHandler("Server Error", 500));
  }
});
