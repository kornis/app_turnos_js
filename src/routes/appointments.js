const express = require("express");
const router = express.Router();
const { appointmentService } = require("../domain/services");

router.post("/create", appointmentService.createAppointment);
router.post("/getCalendar", appointmentService.getCalendarByEmployee);
//router.get("/testAppointment", appointmentService.validateAppointmentDate);

module.exports = router;