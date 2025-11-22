const jwt_verify = require("../utils/jwt_verify");

const jwt_authentication = async (req, res, next) => {
  console.log("req---->", req);
  const auth_token = req.cookies.token;
  if (!auth_token) {
    return res.status(400).json({
      success: false,
      message: "Unauthenticated user, please logged in",
    });
  }

  const verify = await jwt_verify(auth_token);
  console.log("verify ---->", verify);

  if (verify) {
    next();
  } else {
    return res.status(400).json({
      success: false,
      message: "Unauthenticated user, please logged in",
    });
  }

  next();
};

module.exports = jwt_authentication;
