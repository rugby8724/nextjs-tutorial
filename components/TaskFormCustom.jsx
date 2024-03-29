'use client'

import React from 'react'
import { revalidatePath } from 'next/cache'
import { createTaskCustom } from '@/utils/actions'
import { useFormStatus, useFormState } from 'react-dom'

const SubmitButton = () => {
	const { pending } = useFormStatus()
	return (
		<button
			type='submit'
			className='btn join-item btn-primary'
			disabled={pending}
		>
			{pending ? 'please wait...' : 'create task'}
		</button>
	)
}

const initialState = {
	message: null
}

const TaskForm = () => {
	const [state, formAction] = useFormState(createTaskCustom, initialState)
	return (
		<form action={formAction}>
			{state.message ? <p className='mb-2'>{state.message}</p> : null}
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
