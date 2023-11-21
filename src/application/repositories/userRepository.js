export default function userRepository(repoDB){
    const userRegister = (user) => repoDB.userRegister(user);

    const userEmail = (email, retreiveFields) => repoDB.userEmail(email, retreiveFields)

    return{
        userRegister,
        userEmail,
    }
}