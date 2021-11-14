import learnNodeResponse from "../../utils/commonResponse.js";
import { createUserService, deleteUserService, getUserById, listUserService, patchUserService, uploadAvatarService } from "./user.service.js"
import {createValidator, checkUserValid} from "./user.validator.js"



export const listUser = async (req,res) => {
    const {message, data} = await listUserService(req.query);
    return learnNodeResponse(res, message, data);
};

export const getUser = async (req, res) => {
    //de check xem user da dang nhap chua va no co role la gi va id cua user day co dung voi id da dang nhap hay khong

    if (req.user.role === 'user') {
        const isUserValid = checkUserValid(req.user, req.params.id)
        if (!isUserValid.valid) {
            return learnNodeResponse(res, isUserValid.message)
        }

    }

    const {message, data} = await getUserById(req.params.id);
    console.log(req.user);
    return learnNodeResponse(res, message, data);
};

export const createUser = async (req, res) => {
    const validator = createValidator(req.body);
    if (validator) {
        return learnNodeResponse(res, validator)     
    }

    const {message, data} = await createUserService(req.body);
    return learnNodeResponse(res, message, data);
};

export const updateUser = async (req, res) => { 
    const {message, data} = await patchUserService(req.params.id, req.body);
    return learnNodeResponse(res, message, data);
};

export const deleteUser = async (req, res) => {
    const {message, data} = await deleteUserService(req.params.id, req.body);
    return learnNodeResponse(res, message, data);
};

export const uploadAvatar = async (req, res) => {
    const {message, data} = await uploadAvatarService(req.params.id, req.body, req.file);
 
    console.log(req.file);
    return learnNodeResponse (res, message, data);
 };