const express = require("express");
const router = express.Router();
const validatorMiddleware = require("../../middleware/validation");
const { userInterface } = require("../../interface/user.interface");
const { add_user } = require("../../controller/user/add.controller")

router.get("/", async (req, res) => {
  res.send({ data: "User" }).status(200);
});

router.post("/add", validatorMiddleware(userInterface), async (req, res) => {
    return add_user(req, res)
  });

module.exports = router;
