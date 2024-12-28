import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from 'cors';
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";
import jyotirlingRoutes from "./routes/jyotirling.route.js";
import devoteeRoutes from "./routes/devotee.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data in the req.body
app.use(cors());

app.use("/api/products", productRoutes);
app.use("/api/jyotirlings", jyotirlingRoutes);
app.use("/api/devotee", devoteeRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	connectDB();
	console.log(`Server started at http://localhost:${PORT}`);
});
