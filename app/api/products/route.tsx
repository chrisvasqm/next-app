import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const products = await prisma.product.findMany();

    return NextResponse.json(products)
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors[0].message, { status: 400 })

    return NextResponse.json({ id: 1, name: body.name, price: body.price }, { status: 201 });
}