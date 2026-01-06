import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Showing all menu items");
});

export default router;
