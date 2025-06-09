import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendResetEmail = async (toEmail, resetLink) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: 'Reset Your Password',
    html: `<p>You requested a password reset. Click <a href="${resetLink}">here</a> to reset it. This link expires in 1 hour.</p>`,
  };

  return transporter.sendMail(mailOptions);
};
