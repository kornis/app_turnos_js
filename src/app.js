const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();

// Routes
const authRouter = require("./routes/auth");

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => console.log("Server running on port: ", PORT));