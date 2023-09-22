const express = require("express");
const router = express.Router();
const { customerService } = require("../../domain/services");
const validateToken = require("../../middlewares/validateToken");

router.get("/getAppointments", validateToken, customerService.getCustomerAppointments)

module.exports = router;