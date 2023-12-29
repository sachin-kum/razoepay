import mongoose from "mongoose";

export const connectDB = async () => {
  //   const { connection } = await mongoose.connect(process.env.MONGO_URI);
  //   console.log(`Mongodb is connected with ${connection.host}`);
  try {
    mongoose.connect(
      process.env.MONGO_URI
      //   "mongodb+srv://sachin:sachin@cluster0.5gmjzm9.mongodb.net/razorpay/?retryWrites=true&w=majority"
    );
    console.log("connect db");
  } catch (error) {
    console.log(error);
  }
};
