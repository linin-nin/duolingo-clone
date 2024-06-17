import db from "@/db/drizzle"
import { courses } from "@/db/schema"
import { getisAdmin } from "@/lib/admin"
import { NextResponse } from "next/server"



export const GET = async () => {
    const isAdmin = await getisAdmin()
    if(!isAdmin) 
        return new NextResponse("Unauthorized", { status: 401})

    const data = await db.query.courses.findMany()

    return NextResponse.json(data)
}

export const POST = async (req: Request) => {
    const isAdmin = await getisAdmin()
    if(!isAdmin) 
        return new NextResponse("Unauthorized", { status: 401})

    const body = await req.json()
    await db.insert(courses).values({
        ...body
    }).returning()
    const data = await db.query.courses.findMany()

    return NextResponse.json(data[0])
}