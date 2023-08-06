require("dotenv").config();
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

// Routes
const authRouter = require("./routes/auth");
const appointmentRouter = require("./routes/appointments");
// Middlewares
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
//app.use(jwtStrategy);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/appointments", appointmentRouter);
app.get("/api/v1/ping", (req, res) => res.send("pong"))
app.use("*", (req, res) => {
    res.status(404).json({
        error: "Not found"
    });
});


app.listen(PORT, () => console.log("Server running on port: ", PORT));