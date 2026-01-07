const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        return res.status(200).json({ "message": "Login successful" });
    } else {
        return res.status(401).json({ "message": "Invalid" });
    }

})

app.get("/product/:id", (req, res) => {
    const id = req.params.id;
    if (id !== "10") {
        return res.status(404).send("Product not found");
    }
    res.send("product id :10")
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
