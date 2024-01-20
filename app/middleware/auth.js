const config = require('../config');
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('authorization');
    // expected token format: Bearer <token>
    if (!token) {
        return res.status(401).send({ status: 'error', message: 'No token provided' });
    }
    const tokenParts = token.split(' ');
    if (tokenParts.length !== 2) {
        return res.status(401).send({ status: 'error', message: 'Invalid token' });
    }
    const tokenType = tokenParts[0];
    const tokenValue = tokenParts[1];
    if (tokenType !== 'Bearer') {
        return res.status(401).send({ status: 'error', message: 'Invalid token' });
    }
    try {
        const decoded = jwt.verify(tokenValue, config.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(401).send({ status: 'error', message: 'Invalid token' });
    }
}

module.exports = auth;