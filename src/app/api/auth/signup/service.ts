import db from "@/lib/db"
import { SignInData } from "./type"
import { genSalt, hash } from "bcrypt"


const signService = {
    async sigIn(data: SignInData) {
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

export default signService