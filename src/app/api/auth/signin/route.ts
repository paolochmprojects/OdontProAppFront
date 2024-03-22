import { NextRequest, NextResponse } from "next/server"
import signInService from "./service"
import { SignInSchema } from "./schema"
import { cookies } from "next/headers"


export const POST = async (req: NextRequest) => {

    const dataDody = await req.json()
    const result = SignInSchema.safeParse(dataDody)

    if (!result.success) {
        const { error } = result
        return NextResponse.json({ error }, { status: 400 })
    }

    const { data } = result
    const saved = await signInService.signIn(data)

    if (!saved) {
        return NextResponse.json({ error: "Error: invalid credentials" }, { status: 400 })
    }

    cookies().set("sessionToken", saved, {
        httpOnly: true,
        secure: false,
        expires: 60 * 60 * 24 * 7,
        path: "/"
    })

    return NextResponse.json({ message: "ok", token: saved }, { status: 200 })
}
