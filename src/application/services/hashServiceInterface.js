export default function hashServiceInterface(hashService){

    const encryptField = (field) => hashService.encryptField(field)
    
    const compareField = (field, hashField) => hashService.compareField(field, hashField)

    return {
        encryptField,
        compareField,
    }
}