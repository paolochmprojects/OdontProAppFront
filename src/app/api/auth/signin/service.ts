import settings from "@/config/settings"
import db from "@/lib/db"
import { sigInData } from "./type"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

const signInService = {
    async signIn(data: sigInData): Promise<string | null> {

        const userInDB = await db.user.findUnique({ where: { email: data.email } })
        if (!userInDB) return null

        const validPass = await compare(data.password, userInDB.password)
        if (!validPass) return null

        const token = sign({ id: userInDB.id }, settings.TOKEN_SECRET_KEY, {expiresIn: settings.TOKEN_EXPIRY_KEY})
        return token
    }
}

export default signInService