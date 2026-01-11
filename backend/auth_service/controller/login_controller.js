const login_model = require("../models/login_model");
const jwt_encrypt = require("../utils/jwt_encrypt");
const {login_schema} = require('../validations/index')

const login_controller = async (req, res) => {
    const { email, password } = req.body;
    const validate_schema = login_schema.validate(req.body);
    if(validate_schema.error){
        return res.status(400).json({
            error : validate_schema.error.details[0].message
        })
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
            secure: false, //if we put secure true it will only share cookie for https request 
            //not for localhost runing on http host. 
            sameSite: 'None',
            path : '/'
        });
        res.cookie('access_token', access_token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: false,
            sameSite: 'None',
            path : '/'
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
