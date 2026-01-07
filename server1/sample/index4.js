import express from "express"
const app = express();
app.use(express.json());

const validateLogin = (req, res, next) => {

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send("Email and password are Required")
    }
    console.log("Login is valid")
    next()
}

app.post("/login", validateLogin, (req, res) => {
    res.send("Login is successfull")
});

app.listen(5000, () => {
    console.log("Server is loading")
})