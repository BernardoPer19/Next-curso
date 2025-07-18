import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import * as yup from 'yup'

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    const take = Number(searchParams.get("take") ?? "10")
    const skip = Number(searchParams.get("skip") ?? "0")
    if (isNaN(+take)) {
        return NextResponse.json({ message: "Take must be a number" }, { status: 400 })
    }

    if (isNaN(+skip)) {
        return NextResponse.json({ message: "Skip must be a number" }, { status: 400 })
    }

    const todos = await prisma.todo.findMany(
        {
            take: +take,
            skip: +skip
        })
    return NextResponse.json(todos)
}



const idSchema = yup.string().uuid('ID inválido (UUID)').required()

// POST body validation
const postSchema = yup.object({
    description: yup.string().required('La descripción es obligatoria'),
    complete: yup.boolean().optional().default(false),
})

export async function POST(request: Request) {

    try {
        const body = await postSchema.validate(await request.json()) ;
        const todo = await prisma.todo.create({ data: body });

        return NextResponse.json(body);
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}
