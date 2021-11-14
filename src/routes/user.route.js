import { Router } from "express";
import upload from "../../storage.js";
import { createUser, deleteUser, getUser, listUser, updateUser, uploadAvatar } from "../controllers/users/user.controller.js";
import authorization from "../middlewares/authorization.js";
import roleValidator from "../middlewares/roleValidator.js";
import asyncRouter from "../utils/asyncRouter.js";

const router = Router();

export default (app) => {
    app.use('/users', asyncRouter(authorization), router);
    
    router.get('/', roleValidator(['admin']),asyncRouter(listUser));
    router.get('/:id', roleValidator(['admin', 'user']),asyncRouter(getUser));
    router.post('/', roleValidator(['admin']),asyncRouter(createUser));
    router.post('/upload/:id',upload.single('file'), asyncRouter(uploadAvatar))
    router.patch('/:id', asyncRouter(updateUser));
    router.delete('/:id', asyncRouter(deleteUser));



}

