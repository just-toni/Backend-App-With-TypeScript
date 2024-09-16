import { users } from '../models/user.js';
import { generateOTP } from '../utils/otpGenerator.js';
export function getOTP(email) {
    const otp = generateOTP();
    const user = users.find(user => user.email = email);
    if (user) {
        user.otp = otp;
    }
    else {
        users.push({ email, username: '', password: "", otp });
    }
    return otp;
}
export function validateOTP(otp, email) {
    const authenticateUser = users.find(user => user.email = email);
    return (authenticateUser === null || authenticateUser === void 0 ? void 0 : authenticateUser.otp) == otp;
}
