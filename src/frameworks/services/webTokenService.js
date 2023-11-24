import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export default function webTokenService(){
    const generateAccessToken = (payload) => {
        return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30m'})
    }

    const generateRefreshToken = (payload) => {
        return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1h'})
    }

    const verifyAccessToken = (token) => jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    const verifyRefreshToken = (token) => jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
    
    const attachTokenToCookie = (cookieName, tokenVal, res) => {

    }
    return {
        generateAccessToken,
        generateRefreshToken,
        verifyAccessToken,
        verifyRefreshToken,
    }
}