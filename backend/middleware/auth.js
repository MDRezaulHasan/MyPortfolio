const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const protect = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_KEY);

      // console.log(decoded);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "You have to Login",
    });
  }
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

// const admin = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     next();
//   } else {
//     res.status(401).json({
//       message: "User must be an Admin",
//     });
//   }
// };

module.exports = { protect, admin };
