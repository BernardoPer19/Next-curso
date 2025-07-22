import React from 'react'
import prisma from '@/lib/prisma'
import TodosFrid from '@/Todos/components/TodosFrid'
import { NewTodo } from '@/Todos/components/NewTodo'

async function RestTodos() {

  const todos = await prisma?.todo.findMany({orderBy: {description: "desc"}})


  return (
    <div>
      <NewTodo/>
      <TodosFrid todos={todos}/>
    </div>
  )
}

export default RestTodos