import { NextResponse, NextRequest } from "next/server";
import prisma from '@/lib/prisma'

export async function GET(request: Request) {

    await prisma.todo.deleteMany()

    const todo = await prisma?.todo.createMany({
        data: [
               { description: "pieda de filosofal", complete: true},
               { description: "pieda de alarma", complete: true},
               { description: "pieda de e", complete: true},
               { description: "pieda de s", complete: true},

        ]
    })
    console.log(todo);

    return NextResponse.json({
        message: "ae"
    })
}