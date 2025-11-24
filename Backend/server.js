import express from 'express';
import cors from 'cors'; 
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodroute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


// app config
const app = express();
const port = 4000;

// middlewares
app.use(express.json());
app.use(cors());

//db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

app.get("/", (req, res) => {res.send("API Working")})

// listen

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
})

//mongodb+srv://FoodDelivery:Kaltech@30@cluster0.kudwfah.mongodb.net/?