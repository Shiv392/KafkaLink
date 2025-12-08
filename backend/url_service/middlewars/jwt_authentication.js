const jwt_verify = require("../utils/jwt_verify");
const jwt_sign = require("../utils/jwt_sign");

const jwt_authentication = async (req, res, next) => {
    try {
        const access_token = req.cookies.access_token;
        if (access_token) {
            const decoded = await jwt_verify(access_token);

            if (decoded) {
                req.user_id = decoded.id;
                req.user_email = decoded.email;
                return next(); 
            }
        }

        const refresh_token = req.cookies.refresh_token;
        if (!refresh_token) {
            return res.status(401).json({
                success: false,
                message: "Unauthenticated user, please login again",
            });
        }

        const decoded_refresh = await jwt_verify(refresh_token);
        if (!decoded_refresh) {
            return res.status(401).json({ 
                success: false, 
                message: "Session expired, please login again" 
            });
        }
        const new_access_token = await jwt_sign({
            payload: { id: decoded_refresh.id, email: decoded_refresh.email },
            expire_time: "24h",
        });
        res.cookie("access_token", new_access_token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,  
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/"
        });

        // Attach user to request
        req.user_id = decoded_refresh.id;
        req.user_email = decoded_refresh.email;

        return next();

    } catch (err) {
        console.error("AUTH ERROR:", err);
        return res.status(500).json({
            success: false,
            message: "Server error in authentication",
        });
    }
};

module.exports = jwt_authentication;
