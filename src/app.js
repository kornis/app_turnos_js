require("dotenv").config();
const express = require("express");
const passport = require("passport");
const { jwtStrategy } = require("./domain/services/passport");
const app = express();
const PORT = process.env.PORT || 3000;

// Routes
const authRouter = require("./routes/auth");
const appointmentRouter = require("./routes/appointments");

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
//app.use(jwtStrategy);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/appointments", appointmentRouter);

app.listen(PORT, () => console.log("Server running on port: ", PORT));