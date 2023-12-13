import { Request, Response } from 'express'
import { TicketsService, ticketsService } from './tickets.service'

class TicketsController {
    constructor(private readonly ticketsService: TicketsService) {}

    async findAll(req: Request, res: Response) {
        const isEmpty = !Object.values(req.query).length

        const tickets = await this.ticketsService.findAll(
            isEmpty ? undefined : req.query,
        )

        return res.status(200).json(tickets)
    }
}

export const ticketsController = new TicketsController(ticketsService)
