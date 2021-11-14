import { Router } from "express";
import { login, register } from "../controllers/authentication/authentication.controller.js";
import asyncRouter from '../utils/asyncRouter.js';


const router = Router();

export default (app) => {
    app.use('/auth', router);

    router.post('/register', asyncRouter(register));
    router.post('/login', asyncRouter(login));
}