const express = require("express")
const router = express.Router()

const home = require('./home');
const user = require('./user');
const ticket = require('./ticket');

router.use('/', home)
router.use('/user', user)
router.use('/ticket', ticket)

module.exports = router