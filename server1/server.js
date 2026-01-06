import express from "express";

import menuRoute from "./src/menuRouter.js";
import orderRoute from "./src/orderRouter.js";
import userRoute from "./src/userRouter.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/menu", menuRoute);
app.use("/order", orderRoute);
app.use("/user", userRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
