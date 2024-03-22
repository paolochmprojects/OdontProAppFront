import { NextRequest, NextResponse } from "next/server"
import signService from "./service"
import { SignUpSchema } from "./schema"

export const POST = async (req: NextRequest) => {

    const dataBody = await req.json()
    const result = SignUpSchema.safeParse(dataBody)

    if (!result.success) {
        const { error } = result
        return NextResponse.json({ error }, { status: 400 })
    }

    const { data } = result
    const saved = await signService.sigIn(data)

    if (!saved) {
        return NextResponse.json({ error: "Error: to register user" }, { status: 400 })
    }

    return NextResponse.json({ message: "ok" }, { status: 201 })
}