import {Router} from 'express'
import {handleGetOTP, handleValidateOTP} from '../controllers/otpController.js'

const otpRouter = Router();
otpRouter.post('/get-otp', handleGetOTP);
otpRouter.get('/validate-otp', handleValidateOTP);

export default otpRouter;