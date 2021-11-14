import User from "../../models/user.model.js"
import { USER_NOT_FOUND } from "../users/user.code.js";
import { LOGIN_SUCCESS } from "./authentication.code.js";
import {generateToken} from '../../utils/token.js';

export const loginService = async ({email, password}) => {
    const user = await User.findOne({
        where: {
            email,
        }
    });
    if(!user) {
        return{
            message: USER_NOT_FOUND
        }
    };
    const isValidatePassword = user.comparePassword(password);
    if(!isValidatePassword) {
        return{
            message: USER_NOT_FOUND,
        };
    }
 return{
     message: LOGIN_SUCCESS,
     data:{
         user,
         accessToken: generateToken(user.id)
     }
 }    
}
