const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String},
  gitHub: {type:String},
  liveUrl : {type: String},
  createdAt: {type: Date, default: Date.now }


});



const Project = (module.exports = mongoose.model("Project", projectSchema));
module.exports.get = (callback, limit) => {
  Project.find(callback).limit(limit);
};
