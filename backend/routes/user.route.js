import express from "express";
import {
     login, logout, register, getMyProfile
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

export default router;
