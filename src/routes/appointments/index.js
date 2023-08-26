const express = require("express");
const router = express.Router();
const { appointmentService } = require("../../domain/services");
const authorization = require("../../middlewares/validateToken");
const { validateAddAppointment } = require("../../middlewares/appointments");


router.post("/create", authorization, validateAddAppointment, appointmentService.createAppointment);
router.post("/getCalendar", appointmentService.getCalendarByEmployee);
router.post("/getEmployees", appointmentService.getEmployees);
//router.get("/testAppointment", appointmentService.validateAppointmentDate);

module.exports = router;