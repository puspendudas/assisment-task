const express = require("express")
const { genarateToken } = require('../functions/generateToken')
const router = express.Router()

router.get('/', async (req, res) => {
    res.send({ data: 'Bearer', token: genarateToken() }).status(200)
})

module.exports = router;