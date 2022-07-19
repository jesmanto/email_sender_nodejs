const email = require("../email");
require('dotenv').config

// Method that initiates the email sender
exports.register = (req, res) => {
  let mailOptions = {
    from: `"Email Sender Admin" <${process.env.USER_EMAIL}>`,
    to: req.body.email,
    subject: "New Membership",
    text: `Hello ${req.body.name}\nThis message was sent to welcome you.\n\nThank you for choosing us`,
  };

  email.transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(`${err}`);
      return res.json({ err });
    } else {
      console.log(`Email sent to ${req.body.email}`);
      return res
        .json({
          message: `Registration successful and email sent to ${req.body.email}`,data
        });
    }
  });
};
