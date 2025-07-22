// TodosFrid.tsx
"use client";

import { Todo } from "@prisma/client";
import TodoItem from "./TodoItem";
// import { deleteOfCompletes, deleteTodo } from "../helpers/todos";
import { toggleTodo } from "../actions/todo-actions";

interface Props {
  todos: Todo[];
}

function TodosFrid({ todos }: Props) {

  // const toggleDone = async (id: string, complete: boolean) => {
  //   const updated = await update(id, complete);
  //   setTodos((prev) => prev.map((todo) => (todo.id === id ? updated : todo)));
  // };




  // const deleteTodos = async (id: string) => {
  //   await deleteTodo(id);
  //   setTodos((prev) => prev.filter((todo) => todo.id !== id));
  // };

  // const deleteCompleteTodos = async () => {
  //   await deleteOfCompletes();
  //   setTodos((prev) => prev.filter((todo) => todo.complete == true));
  // };

  return (
    <div className="grid gap-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleDone={toggleTodo}
          // onDelete={deleteTodos}
        />
      ))}
    </div>
  );
}

export default TodosFrid;
