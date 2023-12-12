import { z } from 'zod'
import { createUserSchema, updateUserSchema } from '../schemas/users.schema'

type tCreateUserInput = z.infer<typeof createUserSchema>
type tUpdateUserInput = z.infer<typeof updateUserSchema>

export { tCreateUserInput, tUpdateUserInput }
