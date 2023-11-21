import webTokenServiceInterface from "../../../application/services/webTokenServiceInterface.js"
import webTokenService from "../../services/webTokenService.js"

export default function authUser(req, res, next) {
    // const token = req.headers.authorization
    // console.log(token,'accesstoken');
    const authHeader = req.headers.authorization || req.headers.Authorization

    const serviceToken = webTokenServiceInterface(webTokenService())

    if( !authHeader?.startsWith('Bearer ') ){
         throw new Error('Unauthorized')
    }

    const accessToken = authHeader.split(' ')[1]
    const userDecoded = serviceToken.verifyAccessToken(accessToken)
}