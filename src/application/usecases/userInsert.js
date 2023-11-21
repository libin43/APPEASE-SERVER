import userEntity from "../../entities/user.js";
export default async function userInsert(
    firstName,
    lastName,
    email,
    password,
    dbUserRepo,
    serviceHash,
){
    const userExist = await dbUserRepo.userEmail(email, 'firstName -_id')
    if(userExist){
        console.log(userExist,'exist user');
        throw new Error('User already exist')
    }
    const hashPassword = await serviceHash.encryptField(password)

    return dbUserRepo.userRegister(userEntity(
        firstName,
        lastName,
        email,
        hashPassword,
    ))
}