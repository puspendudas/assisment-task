const express = require("express")
const path = require("path")
const router = express.Router();
const apiRoutes = require('./api')
const auth = require('../middleware/auth');
const config = require('../config');
const getToken = require('./getToken');
const login = require('./login');


if (config.REQUIRE_AUTH) {
    router.use('/api/v1', auth, apiRoutes);
}

router.use('/token', getToken)
router.use('/login', login)

module.exports = router