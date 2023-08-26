const express = require("express");
const router = express.Router();
const { authService } = require("../../domain/services");
const { validateLogin, validateRegister } = require("../../middlewares/auth");

router.post("/signup", validateRegister, authService.signup);
router.post("/login", validateLogin, authService.login);
router.post("/glogin", authService.googleLogin);

module.exports = router;