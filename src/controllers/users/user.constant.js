import { EMAIL_IS_REQUIRED, PASSWORD_IS_REQUIRED, ROLE_IS_REQUIRED } from "./user.code.js";

export const DEFAULT_LIMIT = 10;
export const DEFAULT_OFFSET = 0;

export const LIST_USER_NESTED_FIELD = ['id', 'email'];

export const GET_USER_NESTED_FIELD = [
    'id',
    'email',
    'phone',
    'role',
    'address',
    'created_at',
    'updated_at'
];

export const createRequireField = [
    {
        field: 'email',
        code: EMAIL_IS_REQUIRED,
    },
    {
        field: 'password',
        code: PASSWORD_IS_REQUIRED,
    },
    
    {
        field: 'role',
        code: ROLE_IS_REQUIRED,
    },

];

