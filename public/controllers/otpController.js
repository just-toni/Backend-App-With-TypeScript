var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getOTP, validateOTP } from '../services/otpService.js';
export function handleGetOTP(res, req) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.httpVersion);
        // console.log(req);
        const { email } = req.body;
        const otp = getOTP(email);
        res.status(200).json({ message: "OTP sent", otp });
    });
}
export function handleValidateOTP(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, otp } = req.body;
        const validOTP = validateOTP(otp, email);
        res.status(201).json({ message: "OTP validated", validOTP });
    });
}
export function tryred() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Are you working or not");
    });
}
