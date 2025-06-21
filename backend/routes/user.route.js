import express from "express";
import {
     login, logout, register, getMyProfile, getAllUsers, addMobileNumber
} from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/auth.js";
//import singleUpload from '../middlewares/multer.js'

const router = express.Router();

// To register a new user
router.route("/register").post(register);

// Login
router.route("/login").post(login);

// logout
router.route("/logout").get(logout);

// Get my profile
router.route("/me").get(isAuthenticated, getMyProfile);

// Get my profile
router.route("/allUsers").get(getAllUsers);

router.route("/:id").patch(addMobileNumber);

export default router;
