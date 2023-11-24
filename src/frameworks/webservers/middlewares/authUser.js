import webTokenServiceInterface from "../../../application/services/webTokenServiceInterface.js"
import webTokenService from "../../services/webTokenService.js"

export default async function authUser(req, res, next) {

    const authHeader = req.headers.authorization || req.headers.Authorization

    console.log(authHeader, 'ACCESS TOKEN IN MIDDLEWARE');

    const serviceToken = webTokenServiceInterface(webTokenService())

    if (!authHeader?.startsWith('Bearer ')) {
        return next(new Error('Unauthorized'))
    }

    const accessToken = authHeader.split(' ')[1]
    try {
        const userDecoded = await serviceToken.verifyAccessToken(accessToken)
        req.user = userDecoded
        if(userDecoded.role !== 'user'){
            return next(new Error('Access forbidden'))
        }
        next()

    } catch (error) {
        console.log(error, 'its error');

        if (error.name === 'TokenExpiredError') {
            return next(new Error('Access token has expired'))
        } else {
            return next(new Error('Invalid token'))
        }
    }

}