'use client'
import React from 'react'
import { deleteTask } from '@/utils/actions'
import { useFormStatus } from 'react-dom'

const DeleteButton = () => {
	const { pending } = useFormStatus()

	return (
		<button type='submit' className='btn btn-error btn-xs'>
			{pending ? 'please...' : 'delete'}
		</button>
	)
}

const DeleteForm = ({ id }) => {
	return (
		<form action={deleteTask}>
			<input type='hidden' name='id' value={id} />
			<DeleteButton />
		</form>
	)
}

export default DeleteForm
