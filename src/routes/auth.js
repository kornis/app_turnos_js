const express = require("express");
const router = express.Router();
const { authService } = require("../domain/services");
const { loginValidator, registerValidator } = require("../middlewares/auth");

router.post("/signup", registerValidator, authService.signup);
router.post("/login", loginValidator, authService.login);
router.post("/glogin", authService.googleLogin);

module.exports = router;