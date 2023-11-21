export default async function userLoginAuth(
    email,
    password,
    dbUserRepo,
    serviceHash,
    serviceToken,
) {
    const user = await dbUserRepo.userEmail(email, 'firstName password role -_id')

    if(!user) throw new Error('User not found');

    const compareStatus = await serviceHash.compareField(password, user?.password)

    if(!compareStatus) throw new Error('Incorrect email or password')

    const payload = {
        firstName: user?.firstName,
        email: email,
        role: user?.role,
    }

    const accessToken = await serviceToken.generateAccessToken(payload)
    const refreshToken = await serviceToken.generateRefreshToken(payload)
    return {accessToken, refreshToken, payload}
}