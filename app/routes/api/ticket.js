const express = require("express");
const router = express.Router();
const validatorMiddleware = require("../../middleware/validation");
const { userInterface } = require("../../interface/user.interface");
const { generate_ticket } = require("../../controller/ticket/generate.controller");
const { get_ticket } = require("../../controller/ticket/get.controller");

router.get("/", async (req, res) => {
  res.send({ data: "Ticket" }).status(200);
});

router.post(
  "/generate/:n",
  //   validatorMiddleware(userInterface),
  async (req, res) => {
    return generate_ticket(req, res);
  }
);

router.get("/get", async (req, res) => {
  return get_ticket(req, res);
});

module.exports = router;
