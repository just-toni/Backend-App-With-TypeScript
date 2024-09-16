var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import nodemailer from 'nodemailer';
import { PASSMAILER, USER, SERVICE } from '../config/envConfig.js';
export function sendEmailOTP(email, OTP) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const transporter = nodemailer.createTransport({
                service: SERVICE,
                secure: true,
                auth: {
                    pass: PASSMAILER,
                    user: USER
                },
            });
            yield transporter.sendMail({
                from: USER,
                to: email,
                subject: "OTP SENT",
                html: `
                    <b> Hello <b><br>
                    <p> Here is your OTP: ${OTP}</p>
                    <br>
                    <p>Thank you :)</p><br>
                    <p>Toni</p>`
            });
            console.log("otp email sent successfully!!!");
        }
        catch (err) {
            console.log(err, "OTP email not sent");
        }
    });
}
;
