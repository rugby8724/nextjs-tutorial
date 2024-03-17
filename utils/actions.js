'use server'

import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const getAllTasks = async () => {
	return prisma.task.findMany({
		orderBy: {
			createdAT: 'desc'
		}
	})
}

export const createTask = async (formData) => {
	const content = formData.get('content')
	// some validation here

	await prisma.task.create({
		data: {
			content
		}
	})

	// revalidate path
	revalidatePath('/tasks')
}

export const createTaskCustom = async (prevState, formData) => {
	const content = formData.get('content')

	try {
		await prisma.task.create({
			data: {
				content
			}
		})
		revalidatePath('/tasks')
		return { message: 'task was create!' }
	} catch (error) {
		return { message: 'error...' }
	}
}

export const deleteTask = async (formData) => {
	const id = formData.get('id')
	await prisma.task.delete({ where: { id } })
	revalidatePath('/tasks')
}

export const getTask = async (id) => {
	return prisma.task.findUnique({
		where: {
			id
		}
	})
}

export const editTask = async (formData) => {
	const id = formData.get('id')
	const content = formData.get('content')
	const completed = formData.get('completed')

	await prisma.task.update({
		where: {
			id: id
		},
		data: {
			content: content,
			completed: completed === 'on' ? true : false
		}
	})
	redirect('/tasks')
}
