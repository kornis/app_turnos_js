const express = require("express");
const router = express.Router();
const { adminService } = require("../domain/services");

router.post("/addStore", adminService.addStore);
router.post("/addEmployee", adminService.addEmployee);
router.post("/addAppointmentType", adminService.addAppointmentType);

module.exports = router;