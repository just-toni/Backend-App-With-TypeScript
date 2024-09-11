import {users} from '../models/user.js';
import {generateOTP} from '../utils/otpGenerator.js'

export function getOTP(email: string): number{
    const otp = generateOTP();
    const user = users.find(user => user.email = email);
    if(user){
        user.otp = otp;
    }else{
        users.push({email, username: '', password: "", otp});
    }
    return otp;
}

export function validateOTP(otp: number, email: string): boolean{
    const authenticateUser = users.find(user => user.email = email);
    return authenticateUser?.otp == otp;
}