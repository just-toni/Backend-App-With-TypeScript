import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;
const USER = process.env.USER;
const SERVICE = process.env.SERVICE;
const PASSMAILER = process.env.PASSMAILER;
export { PORT, USER, SERVICE, PASSMAILER };
