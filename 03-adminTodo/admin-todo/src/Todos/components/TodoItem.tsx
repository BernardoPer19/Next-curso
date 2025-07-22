import { Todo } from "@prisma/client";
import React, { useOptimistic } from "react";
import styles from "./TodoItem.module.css";
import { startTransition } from "react";

interface Props {
  todo: Todo;
  onToggleDone: (id: string, complete: boolean) => Promise<void>;
  // onDelete: (id: string) => void;
}

function TodoItem({
  todo,
  onToggleDone,
}: // onDelete,
Props) {
  const [optimisticTodo, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      complete: newCompleteValue,
    })
  );

  const onToggleTodo = async () => {
    const newComplete = !optimisticTodo.complete;

    startTransition(() => {
      toggleTodoOptimistic(newComplete);
    });

    try {
      await onToggleDone(todo.id, newComplete);
    } catch (error) {
      startTransition(() => {
        toggleTodoOptimistic(!newComplete); // revertir en caso de error
      });
    }
  };

  const handleToggle = () => {
    onToggleDone(todo.id, !todo.complete);
  };

  const handleDelete = () => {
    // onDelete(todo.id);
  };

  return (
    <div
      className={optimisticTodo.complete ? styles.todoDone : styles.todoPending}
    >
      <p className="text-gray-800 font-medium text-center sm:text-left">
        {optimisticTodo.description}
      </p>
      <div className="flex gap-2">
        <button
          onClick={onToggleTodo}
          className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 text-sm"
        >
          {optimisticTodo.complete ? "Desmarcar" : "Completar"}
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
