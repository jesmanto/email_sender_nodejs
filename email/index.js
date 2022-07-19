const nodemailer = require("nodemailer");
require('dotenv').config()

// Create a transporter
exports.transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type:"OAuth2",
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});
