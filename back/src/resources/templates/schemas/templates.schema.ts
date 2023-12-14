import { z } from 'zod'

const dateRegex: RegExp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

const dateParamSchema = z
    .string()
    .regex(
        dateRegex,
        "'date' param must be in the following format: yyyy-mm-dd",
    )

const emailParamSchema = z.string().email()

export { dateParamSchema, emailParamSchema }
