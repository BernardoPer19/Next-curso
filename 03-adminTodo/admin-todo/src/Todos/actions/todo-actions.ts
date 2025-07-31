"use server";

import { getUserSessionServer } from '@/Auth/actions/serverSession';
import prisma from '@/lib/prisma';
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation';

export const sleep = async (seconds: number = 0): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000)); // corregido 1000 ms = 1s
};

// ✅ Toggle de un todo (completar o desmarcar)
export const toggleTodo = async (id: string, complete: boolean): Promise<void> => {
    if (!id) {
        throw new Error("El ID es requerido para actualizar el Todo.");
    }

    try {
        await prisma.todo.update({
            where: { id },
            data: { complete },
        });

        revalidatePath('/dashboard/server-actions');
    } catch (error) {
        console.error("Error al actualizar Todo:", error);
        throw new Error(`No se pudo actualizar el Todo con ID: ${id}`);
    }
};

// ✅ Agregar un todo
export const addTodo = async (description: string) => {
    const user = await getUserSessionServer();

    if (!user?.id) {
        redirect("/api/auth/signin");
    }

    if (!description || description.trim().length < 3) {
        return { error: "La descripción es muy corta o vacía." };
    }

    try {
        const todo = await prisma.todo.create({
            data: {
                description,
                userId: user.id,
            },
        });

        console.log("serverTodo: ", todo);
        

        revalidatePath('/dashboard/server-actions');
        return { todo };
    } catch (error) {
        console.error("Error al crear Todo:", error);
        return { error: "Error creando Todo" };
    }
};

// ✅ Borrar todos los completados
export const deleteCompletedTodos = async (): Promise<void> => {
    try {
        await prisma.todo.deleteMany({
            where: {
                complete: true,
            },
        });

        revalidatePath('/dashboard/server-actions');
    } catch (error) {
        console.error("Error al borrar Todos completados:", error);
        throw new Error("No se pudieron eliminar los Todos completados.");
    }
};
