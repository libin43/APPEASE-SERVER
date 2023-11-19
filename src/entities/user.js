export default function userEntity(
    userFirstName,
    userLastName,
    userEmail,
    userPassword,
) {
    return {
        getUserFirstName: () => userFirstName,
        getUserLastName: () => userLastName,
        getUserEmail: () => userEmail,
        getUserPassword: () => userPassword,
    }
}