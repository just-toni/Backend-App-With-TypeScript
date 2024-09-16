import {User, users} from '../models/user.js';
import {generateOTP} from '../utils/otpGenerator.js'
import bcrypt from 'bcrypt'

// function signUp(email: string, username: string, password: string): string {
//     const hashedPassword = bcrypt.hash(password,10);
//     const user: User = {email, username,password: hashedPassword};
//     users.push(user);

// }