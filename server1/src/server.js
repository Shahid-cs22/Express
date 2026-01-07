import express from "express";

import menuRouter from "./routes/menuRouter.js";
import orderRouter from "./routes/orderRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();

app.use(express.json());

app.use("/menu", menuRouter);
app.use("/order", orderRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
