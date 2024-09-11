"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOTP = getOTP;
exports.validateOTP = validateOTP;
var user_js_1 = require("../models/user.js");
var otpGenerator_js_1 = require("../utils/otpGenerator.js");
function getOTP(email) {
    var otp = (0, otpGenerator_js_1.generateOTP)();
    var user = user_js_1.users.find(function (user) { return user.email = email; });
    if (user) {
        user.otp = otp;
    }
    else {
        user_js_1.users.push({ email: email, username: '', password: "", otp: otp });
    }
    return otp;
}
function validateOTP(otp, email) {
    var authenticateUser = user_js_1.users.find(function (user) { return user.email = email; });
    return (authenticateUser === null || authenticateUser === void 0 ? void 0 : authenticateUser.otp) == otp;
}
