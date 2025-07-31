import { NextResponse, NextRequest } from "next/server";
import prisma from '@/lib/prisma'
import { create } from "domain";

export async function GET(request: Request) {

    await prisma.todo.deleteMany()
    await prisma.user.deleteMany()


    const user = await prisma.user.create({
        data: {
            email: "test1@gmail.com",
            password: "123123",
            roles: ["a", "2"],
            todos: {
                create: [
                    { description: "pieda de filosofal", complete: true },
                    { description: "pieda de alarma", complete: true },
                    { description: "pieda de e", complete: true },
                    { description: "pieda de s", complete: true },
                ],
            },
        },
    });



    return NextResponse.json({
        message: "ae"
    })
}