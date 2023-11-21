import UserModel from "../models/userModel.js";

export default function userRepoMongoDB() {
    const userRegister = (userEntity) => {
        const newUser = new UserModel({
            firstName: userEntity.getUserFirstName(),
            lastName: userEntity.getUserLastName(),
            email: userEntity.getUserEmail(),
            password: userEntity.getUserPassword(),
        })
        return newUser.save();
    }

    const userEmail = async (email, retreiveFields) => {
        const user = await UserModel.findOne({ email }).select(retreiveFields)
        return user
    }
    return {
        userRegister,
        userEmail,
    }
}