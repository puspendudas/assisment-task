const express = require("express")
const { genarateToken } = require('../../functions/generateToken')
const router = express.Router()
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
    res.send({ data: 'Home'}).status(200)
})

module.exports = router;