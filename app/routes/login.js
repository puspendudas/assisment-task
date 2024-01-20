const express = require("express");
const router = express.Router();
const validatorMiddleware = require("../middleware/validation");
const { loginInterface } = require("../interface/user.interface");
const { loginController } = require("../controller/user/login.controller")


router.post("/", validatorMiddleware(loginInterface), async (req, res) => {
    console.log(loginInterface)
    return loginController(req, res)
  });

module.exports = router;
