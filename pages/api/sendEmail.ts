import { NextApiRequest, NextApiResponse } from "next";
import emailQueue from "./emailQueue";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const email = req.body;
  await emailQueue.enqueue(email, {
    delay: "1min",
    id: email,
  });
  res.status(200).end();
};
