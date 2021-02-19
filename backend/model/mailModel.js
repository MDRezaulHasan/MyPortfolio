const mongoose = require("mongoose");
const mailSchema = new mongoose.Schema({
  name: { type: String, },
  email: { type: String, required: true, unique: true },
  message: { type: String },

  createdAt: { type: Date, default: Date.now },
});

const Mail = (module.exports = mongoose.model("Mail", mailSchema));
module.exports.get = (callback, limit) => {
  Mail.find(callback).limit(limit);
};
