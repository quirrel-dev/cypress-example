import emailQueue from "./emailQueue";

export default async (req, res) => {
  await emailQueue.enqueue(req.body, {
    delay: "1min",
  });
  res.status(200).end();
};
