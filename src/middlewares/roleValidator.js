import { FORBIDDEN } from "../utils/commonCode.js";
import learnNodeResponse from "../utils/commonResponse.js";

const roleValidator = (roles = []) => (req, res, next) => 
    roles.includes(req.user.role) ? next() : learnNodeResponse(res, FORBIDDEN);

export default roleValidator;