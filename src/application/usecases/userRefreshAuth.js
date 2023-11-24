export default async function userRefreshAuth(
    token,
    dbUserRepo,
    serviceToken,
) {
    const userDecoded = await serviceToken.verifyRefreshToken(token)
    console.log(userDecoded,'decoded refresh');
    // const firstName = userDecoded?.firstName
    const email = userDecoded?.email
    // const role = userDecoded?.role
    const user = await dbUserRepo.userEmail(email, 'firstName email role -_id')
    if(!user) throw new Error('User not found')
    const payload = {
        firstName: user?.firstName,
        email: email,
        role: user?.role,
    }
    const accessToken = await serviceToken.generateAccessToken(payload)
    return{accessToken, payload}
}