import { Todo } from "@prisma/client";
import React from "react";
import styles from "./TodoItem.module.css";

interface Props {
  todo: Todo;
  onToggleDone: (id: string, complete: boolean) => Promise<void>;
  onDelete: (id: string) => void;
}

function TodoItem({
  todo,
  onToggleDone,
  onDelete,
}: Props) {
  const handleToggle = () => {
    onToggleDone(todo.id, !todo.complete);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };




  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <p className="text-gray-800 font-medium text-center sm:text-left">
        {todo.description}
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleToggle}
          className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 text-sm"
        >
          {todo.complete ? "Desmarcar" : "Completar"}
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600 text-sm"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
