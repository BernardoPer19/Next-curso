import { Todo } from "@prisma/client";

export const update = async (id: string, complete: boolean): Promise<Todo> => {
  const body = { complete };

  const dbTodo = await fetch(`/api/todo/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(dbTodo);

  return dbTodo;
};


export const post = async (description: string): Promise<Todo> => {
  const body = { description };

  const dbTodo = await fetch(`/api/todo/`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(dbTodo);

  return dbTodo;
};


export const deleteTodo = async (id: string): Promise<Todo> => {

  const dbTodo = await fetch(`/api/todo/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(dbTodo);

  return dbTodo;
};



export const deleteOfCompletes = async () => {

  const dbTodo = await fetch(`/api/todo/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(dbTodo);

  return dbTodo;
}




