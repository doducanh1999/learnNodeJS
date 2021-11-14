import { EMAIL_IS_REQUIRED, PASSWORD_IS_REQUIRED, PHONE_IS_REQUIRED } from "./authentication.code.js"

export const registerRequiredField = [
    {
        field: 'email',
        code: EMAIL_IS_REQUIRED,
    },
    {
        field: 'password',
        code: PASSWORD_IS_REQUIRED,
    },
    {
        field: 'phone',
        code: PHONE_IS_REQUIRED,
    },

]

export const loginRequiredField = [
    {
        field: 'email',
        code: EMAIL_IS_REQUIRED,
    },
    {
        field: 'password',
        code: PASSWORD_IS_REQUIRED,
    },
]

