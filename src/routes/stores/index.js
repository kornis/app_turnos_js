const express = require("express");
const router = express.Router();
const { storeService } = require("../../domain/services");
const validateToken = require("../../middlewares/validateToken");


router.get("/employees/:store", validateToken, storeService.getStoreEmployees);

module.exports = router;