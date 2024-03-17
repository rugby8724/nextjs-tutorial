import React from 'react'
import Link from 'next/link'
import TaskForm from '@/components/TaskForm'
import TaskFormCustom from '@/components/TaskForm'
import TaskList from '@/components/TaskList'

const TasksPage = () => {
	return (
		<div className='max-w-lg'>
			<TaskFormCustom />
			<TaskList />
		</div>
	)
}

export default TasksPage
