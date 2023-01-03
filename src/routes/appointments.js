const express = require("express");
const router = express.Router();
const { appointmentService } = require("../domain/services");

router.post("/create", appointmentService.createAppointment);
//router.get("/testAppointment", appointmentService.validateAppointmentDate);

module.exports = router;