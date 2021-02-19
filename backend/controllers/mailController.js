const Mail = require("../model/mailModel");
const nodemailer = require("nodemailer");
// Get all products
//@des Get all Projects
exports.getMails = async (req, res) => {
  try {
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword, // filter that can grap split letter
            $options: "i", // igonre uppercase or lowe case
          },
        }
      : {};

    const mails = await Mail.find({ ...keyword });
    return res.status(200).json({
      success: true,
      data: mails,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};


exports.new = async (req, res) => {
  try {
    const mail = new Mail({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    console.log("msg: ", mail.message)

    //  text2 = req.body.message;
    // //  console.log(text2);

     const transporter = nodemailer.createTransport({
       service: "outlook",
       auth: {
         user: "rezaulhasan0168@outlook.com",
         pass: "Zia&raju2b",
       },
     });

     var url = "http://localhost:3000/";
     mailOptions = {
       from: url,
       to: "rezaulhasan0168@outlook.com",
       text: mail.message,
     };
     console.log(mail.message);
      
     transporter.sendMail(mailOptions,  function (error, info) {
       if (error) {
         console.log(error);
       } else {
         console.log("Email sent: " + info.response);
   
       }
     });
        await mail.save();
    res.status(201).json({
      data: mail,
    });
  } catch (error) {
    if (error) {
      res.json({
        error: error.message,
        // message: "something worng!"
      });
    }
  }
};
