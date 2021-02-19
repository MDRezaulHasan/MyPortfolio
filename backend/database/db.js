const mongoose = require("mongoose");

const dbConnection = async () => {
  mongoose.set("useCreateIndex", true);
//const URL = "mongodb://localhost:27017/MyProtfolio?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";
//const URL = "mongodb+srv://MyPortfolio:Zia&raju2b@cluster0.px73p.mongodb.net/myportfolio_db?retryWrites=true&w=majority";
const URL = process.env.DB_CONNECTION;
try {
    //||process.env.DB
    await mongoose.connect(URL,  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db is connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnection;
