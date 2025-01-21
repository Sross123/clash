import express, { Application, Request, Response } from "express";
import "dotenv/config";
import Routes from './routes/index.js'

import ejs, { name } from "ejs";

const app: Application = express();
const PORT = process.env.PORT || 7000;
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// setup ejs form sending mail
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// * Routes
app.use(Routes)

// setup view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.get("/email", async (req: Request, res: Response) => {
  // we will use ejs to send html tag and send email
  const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {
    name: "Shashi Ross",
  });
  // await sendMail("nolar31702@downlor.com", "Testing SMTP", html);

    await emailQueue.add(emailQueueName, {
      to: "nolar31702@downlor.com",
      subject: "Testing SMTP",
      html: html,
    });

  res.send("Email sent successfully!");
});
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

// #Queues

import "./jobs/index.js";
import { emailQueue, emailQueueName } from "./jobs/EmailJob.js";

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
