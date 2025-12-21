const login_model = require("../models/login_model");
const jwt_encrypt = require("../utils/jwt_encrypt");

const login_controller = async (req, res) => {
    const { email, password } = req.body;
    console.log('email--->', email, 'password---->', password)
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password required" });
    }

    try {
        let { status, user } = await login_model(email, password);
        if (status != 200) {
            return res.status(status).json({
                message: status == 401 ? 'Password not matched' : status == 404 ? 'Email not valid' : ''
            })
        }

        const access_token_payload = {
            email: user.email,
            id: user.user_id,
        };
        const access_token = await jwt_encrypt({ payload: access_token_payload, expire_time: '24h' });
        const refresh_token = await jwt_encrypt({ payload: access_token_payload, expire_time: '720h' });

        res.cookie('refresh_token', refresh_token, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000,
            secure: process.env.NODE_ENV == 'production', //if we put secure true it will only share cookie for https request 
            //not for localhost runing on http host. 
            sameSite: 'strict'
        });
        res.cookie('access_token', access_token, {
            httpOnly: true,
            maxAge: 10* 1000,
            secure: process.env.NODE_ENV == 'production',
            sameSite: 'strict'
        });
        user = { ...user, access_token: access_token };
        return res.status(200).json({
            message: 'Login Succesfull',
            user: user
        })
    } catch (err) {
        return res.status(500).json({
            error: err,
        });
    }
};

module.exports = login_controller;
