"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var otpController_js_1 = require("../controllers/otpController.js");
var otpRouter = (0, express_1.Router)();
otpRouter.get('/get-otp', otpController_js_1.handleGetOTP);
otpRouter.get('/validate-otp', otpController_js_1.handleValidateOTP);
exports.default = otpRouter;
