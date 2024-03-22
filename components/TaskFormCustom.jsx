'use client'

import React, { useEffect } from 'react'
import { revalidatePath } from 'next/cache'
import { createTaskCustom } from '@/utils/actions'
import { useFormStatus, useFormState } from 'react-dom'
import toast from 'react-hot-toast'

const SubmitButton = () => {
	const { pending } = useFormStatus()

	return (
		<button
			type='submit'
			className='btn join-item btn-primary'
			disabled={pending}
		>
			{pending ? 'please wait... ' : 'create task'}
		</button>
	)
}

const initialState = {
	message: null
}

const TaskForm = () => {
	const [state, formAction] = useFormState(createTaskCustom, initialState)
	useEffect(() => {
		if (state.message === 'error') {
			toast.error('there was an error')
			return
		}
		if (state.message) {
			toast.success('task created')
		}
	}, [state])

	return (
		<form action={formAction}>
			{/* {state.message ? <p className='mb-2'>{state.message}</p> : null} */}
			<div className='join w-full'>
				<input
					className='input input-bordered join-item w-full'
					placeholder='Type Here'
					type='text'
					name='content'
					required
				/>
				<SubmitButton />
			</div>
		</form>
	)
}
export default TaskForm
