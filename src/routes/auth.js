const express = require("express");
const router = express.Router();
const { authService } = require("../domain/services");
const { loginValidaor } = require("../middlewares/auth");

router.post("/signup", authService.signup);
router.post("/login", loginValidaor, authService.login);

module.exports = router;