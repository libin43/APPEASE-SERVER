import bcrypt from 'bcrypt'

export default function hashService(){
    
    const encryptField = async (field) => {
        const salt = await bcrypt.genSalt(10)
        return bcrypt.hash(field, salt)
    }
    const compareField = async (field, hashField) => await bcrypt.compare(field, hashField)

    return {
        encryptField,
        compareField,
    }
}