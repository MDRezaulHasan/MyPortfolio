const User = require('../model/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')

const JWT_KEY = "secrete";
/**
 *  Register Admin
 *  /api/user/register
 */

exports.new = async (req, res) => {
  // see if user exisis

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  const { name, email, password} = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        errors: [{ msg: "User alreday exsits" }],
      });
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
//process.env.JWT_KEY
    user.save();
    const generateToken = (id) => {
      return jwt.sign({ id }, JWT_KEY, {
        expiresIn: 3600,
      });
    };
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
      console.log("error: ",error)
    return res.status(500).json({
     error: "server error"+error,
    });
  }
};



/**
 *  Login Admin
 *  /api/user/login
 */

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.checkPassword(password))) {
    const generateToken = (id) => {
      return jwt.sign({ id }, JWT_KEY, {
        expiresIn: 36000, // Dont forget set it back to 2 mins
      });
    };
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    //   isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({
        message:"Invalid input, Please correct it"
    });
  }
};
