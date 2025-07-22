"use server"

import prisma from '@/lib/prisma'
import { revalidatePath } from "next/cache"


export const sleep = async (secons: number = 0) => {
    return new Promise(resolve => {
        setTimeout(() => {

        }, secons * 2000)
    })
}

export const toggleTodo = async (id: string, complete: boolean): Promise<void> => {
    if (!id) {
        throw new Error("El ID es requerido para actualizar el Todo.");
    }

    try {
        await prisma.todo.update({
            where: { id },
            data: { complete }
        });

        revalidatePath('/dashboard/server-actions');


    } catch (error) {
        console.error(error);
        throw new Error(`No se pudo actualizar el Todo con ID: ${id}`);
    }
}



export const addTodo = async (description: string) => {
    try {
        const todo = await prisma.todo.create({ data: { description } });
        revalidatePath('/dashboard/server-actions');
        return todo
    } catch (error) {
        return {
            message: "Error creando Todo"
        }
    }
}


export const deletCompletesTOPDFOS = async () => {
    await prisma.todo.deleteMany({
        where: {
            complete: true
        }
    });
    revalidatePath('/dashboard/server-actions');
}