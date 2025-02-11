import { Resend } from "resend";
// import EmailTemplate from "../components/EmailTemplate"; // Import your component

const resend = new Resend("re_9rsGC2PE_Jmqr6TWtJwjZTHWPyDnrGTNm");

export async function sendEmail(
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<boolean> {
  //   const emailHtml = await render(
  //     <EmailTemplate name="John Doe" subject={""} message={""} />
  //   );

  const { data, error } = await resend.emails.send({
    from: "josiqlex@gmail.com>",
    to: [email],
    subject: subject,
    html: `<strong>It works! ${name}</strong>`, // Send the rendered HTML
  });

  if (error) {
    console.error("Email sending error:", error);
    return false;
  }

  return true;
}
