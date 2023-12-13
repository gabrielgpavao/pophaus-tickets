import { Request, Response } from 'express'
import { TicketsService, ticketsService } from './tickets.service'
import { ticketStatusSchema, unityEnumSchema } from './schemas/tickets.schema'

class TicketsController {
    constructor(private readonly ticketsService: TicketsService) {}

    async findAll(req: Request, res: Response) {
        const isEmpty = !Object.values(req.query).length

        const tickets = await this.ticketsService.findAll(
            isEmpty ? undefined : req.query,
        )

        return res.status(200).json(tickets)
    }

    async countTicketByStatus(req: Request, res: Response) {
        const ticketStatus = ticketStatusSchema.parse(req.params.status)

        const isEmpty = !Object.values(req.query).length

        const count = await ticketsService.countTicketByStatus(
            ticketStatus,
            isEmpty ? undefined : req.query,
        )

        return res.status(200).json(count)
    }

    async countTicketByUnity(req: Request, res: Response) {
        const unity = unityEnumSchema.parse(req.params.unity)

        const isEmpty = !Object.values(req.query).length

        const count = await ticketsService.countTicketByUnity(
            unity,
            isEmpty ? undefined : req.query,
        )

        return res.status(200).json(count)
    }
}

export const ticketsController = new TicketsController(ticketsService)
