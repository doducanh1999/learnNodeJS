import User from "../../models/user.model.js";
import bcrypt from 'bcryptjs';

import { queryBuilder, updateUserData } from "./user.validator.js";
import parseIntString from "../../utils/parsing.js";
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "./user.constant.js";
import { LIST_USER_NESTED_FIELD, GET_USER_NESTED_FIELD } from "./user.constant.js";
import { 
    CREATE_USER_SUCCESS, 
    DELETE_USER_SUCCESS, 
    GET_USER_SUCCESS, 
    LIST_USER_SUCCESS, 
    UPDATE_USER_SUCCESS, 
    USER_EXISTED, 
    USER_ID_INVALID, 
    USER_NOT_FOUND,
UPLOAD_AVATAR_SUCCESS } from "./user.code.js";

export const listUserService = async (query) => {
    const {limit, offset} = query;
    const parseIntLimit = parseIntString(limit) || DEFAULT_LIMIT;
    const parseIntOffset = parseIntString(offset) || DEFAULT_OFFSET;

    const {count, rows: users} = await User.findAndCountAll({
        where: queryBuilder(query),
        attributes: LIST_USER_NESTED_FIELD,
        limit: parseIntLimit,
        offset: parseIntOffset,
    });

    return {
        message: LIST_USER_SUCCESS,
        data: {
            total: count,
            limit: parseIntLimit,
            offset: parseIntOffset,
            data: users,
        }
  };
};

export const getUserById = async (id) => {
    const userId = parseIntString(id);
    if (!userId) {
        return {
            message: USER_ID_INVALID,
        };
    };

    const user = await User.findOne({
        where: {
            id: userId,
        },
        attributes: GET_USER_NESTED_FIELD,
    });
    if (!user){
        return{
            message: USER_NOT_FOUND,
        };
    };

    return {
        message: GET_USER_SUCCESS,
        data: user,
    }
};




export const createUserService = async (data) => {
    const {email, password, phone, role, address} = data;
    console.log(data);
    const user = await User.findOne({
        where: {
            email,
        }
    });

    if(user) {
        return{ 
            message: USER_EXISTED,
        };
    };
    const salt = bcrypt.genSaltSync(10);
    const newUser = await User.create({
        email,
        password: bcrypt.hashSync(password, salt),
        role,
        phone,
        address,
    });

    const {data: createdUser} = await getUserById(newUser.id);
    return{
        message: CREATE_USER_SUCCESS,
        data: createdUser,
    };
};


export const patchUserService = async (userId, data) => {
    const user = await getUserById(userId);
    if(!user.data){
        return{
            message: user.message,
        };
    };

    const allowUpdateData = updateUserData(data);
    await User.update(allowUpdateData, {
        where: {
            id: user.data.id,
        },
    });
    const {data: updatedUser} = await getUserById(userId);
    return {
        message: UPDATE_USER_SUCCESS,
        data: updatedUser,
    };
};

export const deleteUserService = async (userId) => {
    const user = await getUserById(userId);
    if (!user.data) {
        return{ 
            message: user.message,
        };

    };

    await User.destroy({
        where: {
            id: user.data.id,
            },
    });
    return{
        message: DELETE_USER_SUCCESS,
        data: user.data,
    }


};
export const uploadAvatarService = async (userId, body, file) => {
    const user = await getUserById(userId);
        if (!user.data) {
        return {
            message: user.message,
        }
    };
    const {data: uploadAvatar} = await patchUserService (userId, {avatar:file.path}) 

    return{
        message: UPLOAD_AVATAR_SUCCESS,
        data: uploadAvatar,
    }    
    
}





