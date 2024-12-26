import express, { Application, Request, Response } from "express";
import "dotenv/config";
import ejs from 'ejs'

const app: Application = express();
const PORT = process.env.PORT || 7000;
import path from 'path';
import { fileURLToPath } from 'url';
// import { sendMail } from "./config/mail.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// setup ejs form sending mail
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setup view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

// app.get("/", async (req: Request, res: Response) => {
//     // we will use ejs to send html tag and send email
//     const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, { name: "Shashi Ross", });
//     await sendMail("yefelo5836@kelenson.com", "Testing SMTP", html)
//     res.send("Email sent successfully");
// });
app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello World" });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 