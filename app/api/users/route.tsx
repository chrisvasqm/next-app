import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany();

    return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    if (!body.name)
        return NextResponse.json({ error: 'name is required' }, { status: 400 })

    return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
