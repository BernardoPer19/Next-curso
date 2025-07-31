import React from "react";
import prisma from "@/lib/prisma";
import TodosFrid from "@/Todos/components/TodosFrid";
import { NewTodo } from "@/Todos/components/NewTodo";
import { getUserSessionServer } from "@/Auth/actions/serverSession";
import { redirect } from "next/navigation";

async function RestTodos() {
  const user = await getUserSessionServer();

  if (!user) {
    redirect("api/auth/signin");
  }

  const todos = await prisma?.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: "desc" },
  });

  return (
    <div>
      <NewTodo />
      <TodosFrid todos={todos} />
    </div>
  );
}

export default RestTodos;
