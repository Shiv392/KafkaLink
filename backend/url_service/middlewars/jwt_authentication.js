const jwt_verify = require("../utils/jwt_verify");

const jwt_authentication = async (req, res, next) => {
  const auth_token = req.cookies.token;
  if (!auth_token) {
    return res.status(401).json({
      success: false,
      message: "Unauthenticated user, please logged in",
    });
  }

  const verify = await jwt_verify(auth_token);
  if (verify) {
    //append user_id and email address for the next request body
    req.user_id = verify.id;
    next();
  } else {
    return res.status(400).json({
      success: false,
      message: "Unauthenticated user, please logged in",
    });
  }
};

module.exports = jwt_authentication;
