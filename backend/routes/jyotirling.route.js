import express from "express";

import { createJyotirling, deleteJyotirling, getJyotirling, updateJyotirling } from "../controllers/jyotirling.controller.js";

const router = express.Router();

router.get("/", getJyotirling);
router.post("/", createJyotirling);
router.put("/:id", updateJyotirling);
router.delete("/:id", deleteJyotirling);

export default router;
