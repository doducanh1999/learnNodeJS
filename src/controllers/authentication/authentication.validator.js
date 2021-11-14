import { loginRequiredField, registerRequiredField } from "./authentication.constant.js";

export const registerValidator = (data) => {
    return registerRequiredField.find((item) => !data[item.field])?.code
};

export const loginValidator = (data) => {
    return loginRequiredField.find((item) => !data[item.field])?.code

};