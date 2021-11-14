import jwt from 'jsonwebtoken';

import parseIntString from './parsing.js';
import tokenConfig from '../config/token.config.js';

export const generateToken = (userId) =>
    jwt.sign({ userId }, tokenConfig.SECRET, {
        expiresIn: parseIntString(tokenConfig.EXPIRE), // millisecond
    });

export const validateToken = (token) => jwt.verify(token, tokenConfig.SECRET);