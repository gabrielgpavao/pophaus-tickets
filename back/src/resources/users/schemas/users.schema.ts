import { z } from 'zod'

const createUserSchema = z.object({})

const updateUserSchema = createUserSchema.partial()

export { createUserSchema, updateUserSchema }
