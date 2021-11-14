import learnNodeResponse from '../../utils/commonResponse.js';
import {loginValidator, registerValidator} from './authentication.validator.js';
import { createUserService } from '../users/user.service.js';
import { loginService } from './authentication.service.js';
export const register = async (req, res) => {
    const validator = registerValidator(req.body);
    if (validator){
        return learnNodeResponse(res, validator)
    };

    const {message, data} = await createUserService({ ...req.body, role: 'user'});
    return learnNodeResponse(res, message, data); 

};

export const login = async (req, res) => {
    const validator = loginValidator(req.body);
    if (validator){
        return learnNodeResponse(res, validator)
    };
    const {message, data} = await loginService(req.body);
    return learnNodeResponse(res, message, data);

};

