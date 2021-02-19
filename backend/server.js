require("dotenv").config();
const express = require("express");
const app = express();
const bodyparser = require('body-parser')
app.use(express.json());
const path = require("path");
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const mailRoutes = require("./routes/mailRoutes");
const dbConnection = require("./database/db");
dbConnection();

app.use(bodyparser.urlencoded({ extended: true }));


app.use("/api/user", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/mails", mailRoutes);

// const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(path.resolve(), "/uploads")));
if(process.env.NODE_ENV==="production") {
  app.use(express.static("frontend/build"))

  app.get("*", (req, res)=>{
    res.sendFile(path.join(path.resolve(), "frontend", "build", "index.html")); //relative path
  })
}



app.listen(PORT, () => {
  console.log("server is running: " + PORT);
});
