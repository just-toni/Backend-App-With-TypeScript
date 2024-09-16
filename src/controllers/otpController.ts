import {Response, Request} from 'express';
import {getOTP, validateOTP} from '../services/otpService.js';

export async function handleGetOTP(res: Response, req: Request){
  console.log(req.httpVersion);
  // console.log(req);
  const {email}: {email:string} = req.body;
  const otp = getOTP(email);
  res.status(200).json({message: "OTP sent", otp});
} 

export async function handleValidateOTP(req:Request, res:Response){
  const {email, otp}: {email:string, otp:number} = req.body;
  const validOTP = validateOTP(otp, email);
  res.status(201).json({message: "OTP validated", validOTP});
}

export async function tryred() {
  console.log("Are you working or not");
}