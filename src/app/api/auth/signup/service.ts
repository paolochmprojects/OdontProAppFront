import db from "@/lib/db"
import { SignUpData } from "./type"
import { genSalt, hash } from "bcrypt"


const signUpService = {
    async signUp(data: SignUpData) {
        let { confirmPassword, ...datatoSave } = data
        if (confirmPassword !== datatoSave.password) return false

        const userInDb = await db.user.findUnique({ where: { email: datatoSave.email } })
        if (userInDb) return false

        const salt = await genSalt(10)
        datatoSave.password = await hash(datatoSave.password, salt)

        await db.user.create({ data: datatoSave })
        return true
    }
}

export default signUpService