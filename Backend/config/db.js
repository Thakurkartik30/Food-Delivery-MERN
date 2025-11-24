import mongoose, { Mongoose} from "mongoose";

export const connectDB = async () => {
await mongoose
  .connect(
    "mongodb+srv://FoodDelivery:Kaltech%4030@cluster0.kudwfah.mongodb.net/FOOD-DEL"
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Error:", err));
}
