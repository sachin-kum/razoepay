import express from "express";
import { config } from "dotenv";
import paymentRoutes from "./routes/paymentRoutes.js";
import cors from "cors";
import { connectDB } from "./config/database.js";

config({ path: "./config/config.env" });
connectDB();
export const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", paymentRoutes);
app.use("/api/getkey", (req, res) => {
  res.status(200).json({
    key: process.env.RAZORPAY_API_KEY,
    success: true,
  });
});
