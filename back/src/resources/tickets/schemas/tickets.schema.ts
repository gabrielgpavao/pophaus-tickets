import { z } from 'zod'
import { TicketStatus, UnityEnum } from '../entities/tickets.entity'

const dateRegex: RegExp = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

const filterOptionsSchema = z
    .object({
        date: z
            .string()
            .regex(
                dateRegex,
                "'date' query must be in the following format: yyyy-mm-dd",
            ),
        created_at: z
            .string()
            .regex(
                dateRegex,
                "'created_at' query must be in the following format: yyyy-mm-dd",
            ),
    })
    .partial()

const ticketStatusSchema = z.nativeEnum(TicketStatus)

const unityEnumSchema = z.nativeEnum(UnityEnum)

const uuidSchema = z.string().uuid()

export { filterOptionsSchema, ticketStatusSchema, unityEnumSchema, uuidSchema }
