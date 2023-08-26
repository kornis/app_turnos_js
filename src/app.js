require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
const { ErrorHandler, NotFoundError } = require("./utils/errorHandler");
const errorLogger = require("./utils/logger");

// Routes
const authRouter = require("./routes/auth");
const appointmentRouter = require("./routes/appointments");
// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/appointments", appointmentRouter);
app.get("/api/v1/ping", (req, res) => res.send("pong"))


app.use("*", (req, res) => {
    next(new NotFoundError("Route not found"));
});


app.use(function(err, req, res, next) {

    if(err instanceof ErrorHandler) {
        res.status(err.statusCode).json({
            message: err.message
    });
    } else {
        console.error(err);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

process.on("unhandledRejection", error => {
    throw error;
});

process.on("uncaughtException", error => {
    errorLogger(error);
    if(!(error instanceof ErrorHandler)) { 
        process.exit(1);
    }
})

app.listen(PORT, () => console.log("Server running on port: ", PORT));