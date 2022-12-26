const express = require("express");
const router = express.Router();
const { appointmentService } = require("../domain/services");

router.post("/create", appointmentService.createAppointment);

module.exports = router;