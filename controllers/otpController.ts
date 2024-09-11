import {Response, Request} from 'express';
import {getOTP, validateOTP} from '../services/otpService.js';

export async function handleGetOTP(res: Response, req: Request){
  const {email} = req.body;
  const otp = getOTP(email);
  res.status(200).json({message: "OTP sent", otp});
} 

export async function handleValidateOTP(req:Request, res:Response){
  const {email, otp} = req.body;
  const validOTP = validateOTP(otp, email);
  res.status(201).json({message: "OTP validated", validOTP});
}