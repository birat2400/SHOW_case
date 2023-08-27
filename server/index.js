const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "sthabirat057@gmail.com",
    pass: "qvlixidcmzoqjwqw",
  },
});

async function main(mailjaa) {
  const { from, to, subject, text, html } = mailjaa;
  const info = await transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    text: text,
    html: html,
  });
}

module.exports = { main };
