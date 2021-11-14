import Sequelize from 'sequelize';
import { FORBIDDEN } from '../../utils/commonCode.js';
import { createRequireField } from './user.constant.js';
import parseIntString from '../../utils/parsing.js';
import { USER_ID_INVALID } from './user.code.js';

const {Op} = Sequelize;

const queryBuilder = (query) => {
    const where = {};

    if (query.email) {
        where.email = {
            [Op.iLike]: `%${query.email}`
        };
    }
    if (query.role) {
        where.role = 
            query.role 
    }
    return where;
};

const updateUserData = (data) => ({
    address: data.address,
    phone: data.phone,
    role: data.role,
    avatar: data.avatar,
    
});

const createValidator = (data) =>  createRequireField.find((item) => !data[item.field])?.code;

const checkUserValid = (currentUser, queryUserId) => {
    const userId = parseIntString(queryUserId);
    if (!userId) {
        return {
           message: USER_ID_INVALID,
        };
    };

    if(currentUser.id !== userId){
        return{
            valid: false,
            message: FORBIDDEN,
        }
    }

    return {
        valid: true
    }
}


export {queryBuilder, updateUserData, createValidator, checkUserValid};

