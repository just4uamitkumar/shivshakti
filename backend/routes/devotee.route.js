import express from "express";

import { getDevotee, addDevotee, updateDevotee, deleteDevotee } from "../controllers/devotee.controller.js";

const router = express.Router();

router.get("/", getDevotee);
router.post("/", addDevotee);
router.put("/:id", updateDevotee);
router.delete("/:id", deleteDevotee);

export default router;
