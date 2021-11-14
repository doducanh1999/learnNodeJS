import { NOT_AUTHENTICATED } from '../utils/commonCode.js';
import { validateToken } from '../utils/token.js';
import { getUserById } from '../controllers/users/user.service.js';
import learnNodeResponse from '../utils/commonResponse.js';

const authorization = async (req, res, next) => {
    if (!req.headers.authorization) {
        return learnNodeResponse(res, NOT_AUTHENTICATED);
    }

    try {
        // Authorization: Bearer token_abc_xyz -> [Bearer, token_abc_xyz]
        const [type, token] = req.headers.authorization.split(' ');
        if (type !== 'Bearer') {
            return learnNodeResponse(res, NOT_AUTHENTICATED);
        }

        const {userId} = validateToken(token);
        const {data} = await getUserById(userId);
        if(!data){
            return learnNodeResponse(res, NOT_AUTHENTICATED);
        }

        req.user = data;
    } catch (_err) {
        return learnNodeResponse(res, NOT_AUTHENTICATED);
    }

    return next();
};

export default authorization;