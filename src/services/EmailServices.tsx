// // import { Resend } from "resend";
// // import EmailTemplate from "../components/EmailTemplate"; // Import your component

// // const resend = new Resend("re_9rsGC2PE_Jmqr6TWtJwjZTHWPyDnrGTNm");
// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "your-email@gmail.com",
//     pass: "your-app-password", // Use an app password, NOT your actual password
//   },
// });

// const mailOptions = {
//   from: "josiqlex@gmail.com",
//   to: "yosefale65@gmail.com",
//   subject: "Test Email",
//   text: "Hello! This is a test email sent using Nodemailer with ES modules.",
// };
// export async function sendEmail() {
//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent:", info.response);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
