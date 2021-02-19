const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required:true },
  password: { type: String, required: true },
  // isAdmin: { type: Boolean, default: false, required: true},
});

// We need to check password, bcz pasword is already hashed, so we have to decrypt the password for checking

userSchema.methods.checkPassword = async function (enteredPass) {
  return await bcrypt.compare(enteredPass, this.password);
};

const User = (module.exports = mongoose.model("User", userSchema));
module.exports.get = (callback, limit) => {
  User.find(callback).limit(limit);
};
