import nodemailer from 'nodemailer'
import {PASSMAILER, USER, SERVICE} from '../config/envConfig.js'


export async function sendEmailOTP(email: string, OTP: number) {
    try{
        const transporter = nodemailer.createTransport({
            service: SERVICE,
            secure: true,
            auth: {
                pass:PASSMAILER,
                user: USER
            },
        });
        await transporter.sendEmail({
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
        console.log("otp email sent successfully!!!")
    }catch(err){
        console.log(err, "OTP email not sent");
    }
}