// TodosFrid.tsx
"use client";

import { Todo } from "@prisma/client";
import TodoItem from "./TodoItem";
import { useState } from "react";
import { deleteOfCompletes, deleteTodo, update } from "../helpers/todos";

interface Props {
  todos: Todo[];
}

function TodosFrid({ todos: initialTodos }: Props) {
  const [todos, setTodos] = useState(initialTodos);
  const toggleDone = async (id: string, complete: boolean) => {
    const updated = await update(id, complete);
    setTodos((prev) => prev.map((todo) => (todo.id === id ? updated : todo)));
  };

  const deleteTodos = async (id: string) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const deleteCompleteTodos = async () => {
    await deleteOfCompletes();
    setTodos((prev) => prev.filter((todo) => todo.complete == true));
  };

  return (
    <div className="grid gap-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleDone={toggleDone}
          onDelete={deleteTodos}
        />
      ))}
    </div>
  );
}

export default TodosFrid;
