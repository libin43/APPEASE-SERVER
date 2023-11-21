export default function webTokenServiceInterface(webTokenService) {

    const generateAccessToken = (payload) => webTokenService.generateAccessToken(payload);
    
    const generateRefreshToken = (payload) => webTokenService.generateRefreshToken(payload);

    const verifyAccessToken = (token) => webTokenService.verifyAccessToken(token)
    const verifyRefreshToken = (token) => webTokenService.verifyRefreshToken(token)

    return {
        generateAccessToken,
        generateRefreshToken,
        verifyAccessToken,
        verifyRefreshToken,
    }
}