import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder, listOrders ,updateStatus,userOrders } from "../controllers/orderController.js"

const orderRouter = express.Router();

// Endpoint to place order (User must be logged in)
orderRouter.post("/place", authMiddleware, placeOrder);

// Endpoint for Admin to see all orders
orderRouter.get("/list", listOrders);

// Endpoint for updating order status
orderRouter.post("/status",updateStatus);

// Endpoint for user order for frontend
orderRouter.post("/userorders",authMiddleware,userOrders)



export default orderRouter;