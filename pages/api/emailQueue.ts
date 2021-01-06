import { Queue } from "quirrel/next";
import { createTransport } from "nodemailer";

export default Queue("api/emailQueue", async (to: string) => {
  const transport = createTransport(process.env.SMTP_URL);

  await transport.sendMail({
    from: "cypress-showcase@quirrel.dev",
    to,
    subject: "This is your email!",
    text: "It was delayed by a minute - for whatever reason ;D",
  });
});
