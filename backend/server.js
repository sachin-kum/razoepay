import Razorpay from "razorpay";
import { app } from "./app.js";

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.listen(process.env.PORT || 2500, () => {
  console.log(`Server is working on port ${process.env.PORT}`);
});
