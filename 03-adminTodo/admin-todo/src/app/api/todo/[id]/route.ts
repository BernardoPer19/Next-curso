import prisma from '@/lib/prisma'
import { Todo } from '@prisma/client';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'
import * as yup from 'yup';

interface SegmentParams {
    params: {
        id: string
    }
}

const getTodo = async (id: string): Promise<Todo | null> => {

    const todo = await prisma.todo.findFirst({
        where: { id },
    })

    return todo
}




export async function GET(request: NextRequest, { params }: SegmentParams) {
    const { id } = await params

    try {
        const todo = await getTodo(id)

        if (!todo) {
            return NextResponse.json({ error: `Todo con este id: ${id} no encontrado` }, { status: 404 })
        }

        return NextResponse.json(todo)
    } catch (error) {
        console.error('Error al buscar el todo:', error)
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
    }
}




export async function DELETE(request: NextRequest, { params }: SegmentParams) {
    const { id } = await params

    try {
        const todo = await getTodo(id)

        if (!todo) {
            return NextResponse.json({ error: `Todo con este id: ${id} no encontrado` }, { status: 404 })
        }

        await prisma.todo.delete({
            where: {
                id
            }
        })

        return NextResponse.json(todo)
    } catch (error) {
        console.error('Error al buscar el todo:', error)
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
    }
}


const putSchema = yup.object({
    complete: yup.boolean().optional(),
    description: yup.string().optional()
})



export async function PUT(request: NextRequest, { params }: SegmentParams) {
    const { id } = await params

    try {
        const todo = await getTodo(id)

        if (!todo) {
            return NextResponse.json({ error: `Todo con este id: ${id} no encontrado` }, { status: 404 })
        }

        const { complete, description } = await putSchema.validate(await request.json())

        const updatedTodo = await prisma.todo.update({
            where: { id },
            data: { complete, description }
        })

        return NextResponse.json(updatedTodo)
    } catch (error) {
        console.error('Error al buscar el todo:', error)
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
    }
}

