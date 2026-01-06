import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  res.send("Order is placed");
});

router.get("/:id", (req, res) => {
  res.send(`Order status for ID: ${req.params.id}`);
});

export default router;
