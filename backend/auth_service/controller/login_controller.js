const login_model = require("../models/login_model");
const jwt_encrypt = require("../utils/jwt_encrypt");

const login_controller = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password required" });
    }

    try {
        let { status, user } = await login_model(email, password);

        if (status == 200) {
            const jwt_payload = {
                email: user.email,
                id: user.user_id,
            };
            jwt_encrypt(jwt_payload)
                .then((token) => {
                    user = {...user, token : token};
                    return res.status(200).json({
                        message: "Login Successfull",
                        user: user
                    });
                })
                .catch((err) => {
                    throw new Error(err);
                });
        } else if (status == 404) {
            return res.status(404).json({
                message: "User not exists",
            });
        } else if (status == 401) {
            return res.status(401).json({
                message: "Password not matched ",
            });
        }
    } catch (err) {
        return res.status(500).json({
            error: err,
        });
    }
};

module.exports = login_controller;
