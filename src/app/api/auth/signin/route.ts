import { NextRequest, NextResponse } from "next/server"

export const POST = (req: NextRequest) => {
    return NextResponse.json({ message: "ok" }, { status: 201 })
}