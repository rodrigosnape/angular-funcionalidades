const { validateToken } = require("../utils/jwt-manager");

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader &&authHeader.split(' ')[1];

    if(!token){
        //return res.sendStatus(401);
        return res.status(401).json({ message: 'Token not provided.'});
    }

    const TOKEN_IS_VALID = validateToken(token);

    if(!TOKEN_IS_VALID){
        //return res.sendStatus(403);
        return res.status(403).json({ message: 'Invalid or expired token.'});
    }

    next();
}

module.exports = { authenticateToken };