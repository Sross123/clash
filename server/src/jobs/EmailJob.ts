import {Job, Queue, Worker} from "bullmq";
import { redisConnection, defaultJobOptions } from "../config/queue.js";
import { sendMail } from "../config/mail.js";

export const emailQueueName = "emailQueue";

interface EmailJobDateType{
    to: string,
    subject: string,
    body: string,
}

export const emailQueue = new Queue(emailQueueName, {
    connection: redisConnection,
    defaultJobOptions: defaultJobOptions
})

//* Worker
export const workerQueue = new Worker(emailQueueName, async(job:Job)=>{
    const data:EmailJobDateType = job?.data;
    await sendMail(data.to, data.subject, data.body)
}, {
    connection: redisConnection
})