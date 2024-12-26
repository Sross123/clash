// import nodemailer, {TransportOptions} from 'nodemailer'

// export const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT || 465,
//     secure: process.env.SMTP_SECURE_FLAG || true,
//     auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASSWORD,
//     },
// } as TransportOptions)

// export const sendMail = async (to:string, subject:string, body:string) => {
//     await transporter.sendMail({
//         from: process.env.FROM_EMAIL, // sender addressa
//         to: to, // list of receivers
//         subject: subject, // Subject line
//         html: body, // html body
//     });
// }