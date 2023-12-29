import { instance } from "../server.js";
import crypto from "crypto";
import { Payment } from "../model/paymentModel.js";
export const checkout = async (req, res) => {
  try {
    const { amount } = req.body;
    var options = {
      amount: Number(amount * 100), // amount in the smallest currency unit
      currency: "INR",
    };
    let order = await instance.orders.create(options);
    console.log(order);
    return res.status(200).json({
      status: true,
      order: order,
    });
  } catch (error) {
    console.log(error);
  }
};

export const paymentVerification = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(body.toString())
      .digest("hex");
    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Database comes here

      await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });
      res.redirect(
        `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } else {
      res.status(400).json({
        success: false,
      });
    }
    res.status(200).json({
      sucess: true,
    });
  } catch (error) {
    console.log(error);
  }
};
