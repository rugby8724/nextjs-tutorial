import React from 'react'
import prisma from '@/utils/db'

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: 'wake up',
    }
  })
  const allTasks = await prisma.task.findMany({
    orderBy:{
      createdAT: 'desc'
    }
  })
  return allTasks
}

const PrismaExample = async () => {
  const tasks = await prismaHandlers()

  return (
    <div> 
     <h1>PrismaExample</h1> 
     {tasks.map((tasks)=>{
      return (
        <h2 key={tasks.id} className='text-xl py-2'>
          😃{tasks.content}
        </h2>
      )
     })}
    </div>
  )
}

export default PrismaExample