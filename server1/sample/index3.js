const express = require("express");

const app = express();


app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);

    res.send("User ID: " + id);
});


app.get("/product/:id", (req, res) => {
    const id = req.params.id;

    const products = {
        1: "Laptop",
        2: "Mobile"
    };

    res.send("Product: " + (products[id] || "Not Found"));
});


app.listen(3000, () => {
    console.log("App working on PORT 3000");
});
