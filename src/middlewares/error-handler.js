import learnNodeResponse from "../utils/commonResponse.js";
import { NOT_FOUND } from "../utils/commonCode.js";
import Logger from "../libs/logger.js";
import { fileURLToPath } from "url";
const logger = new Logger({file: fileURLToPath(import.meta.url)});

export const notFound = (_req, res) => learnNodeResponse(res, NOT_FOUND);

export const errorHandler = (err, _req, res, _next) =>{ 
    logger.error(err.message);

    return learnNodeResponse(res, {
        statusCode: err.status || 500,
        code: 'INTERNAL_SERVER',
        message: err.message,
    });
};

// dau _ la khong su dung