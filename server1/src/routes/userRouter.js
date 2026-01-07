import express from "express"
const router = express.Router();

router.post("/login", (req, res) => {
  res.send("User login");
});

router.post("/register", (req, res) => {
  res.send("User registered");
});

export default router;