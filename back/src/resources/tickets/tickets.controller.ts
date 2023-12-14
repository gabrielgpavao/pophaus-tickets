import { Request, Response } from 'express'
import { ticketsService } from './tickets.service'
import {
    ticketStatusSchema,
    unityEnumSchema,
    uuidSchema,
} from './schemas/tickets.schema'
import { HttpStatus } from '../../constants/HttpStatus'

class TicketsController {
    async findAll(req: Request, res: Response) {
        const isEmpty = !Object.values(req.query).length

        const tickets = await ticketsService.findAll(
            isEmpty ? undefined : req.query,
        )

        return res.status(HttpStatus.OK).json(tickets)
    }

    async countTicketByStatus(req: Request, res: Response) {
        const ticketStatus = ticketStatusSchema.parse(req.params.status)

        const isEmpty = !Object.values(req.query).length

        const count = await ticketsService.countTicketByStatus(
            ticketStatus,
            isEmpty ? undefined : req.query,
        )

        return res.status(HttpStatus.OK).json(count)
    }

    async countTicketByUnity(req: Request, res: Response) {
        const unity = unityEnumSchema.parse(req.params.unity)

        const isEmpty = !Object.values(req.query).length

        const count = await ticketsService.countTicketByUnity(
            unity,
            isEmpty ? undefined : req.query,
        )

        return res.status(HttpStatus.OK).json(count)
    }

    async countTicketByUser(req: Request, res: Response) {
        const userId = uuidSchema.parse(req.params.id)

        const isEmpty = !Object.values(req.query).length

        const count = await ticketsService.countTicketByUser(
            userId,
            isEmpty ? undefined : req.query,
        )

        return res.status(HttpStatus.OK).json(count)
    }

    async totalSalesByUnity(req: Request, res: Response) {
        const unity = unityEnumSchema.parse(req.params.unity)

        const isEmpty = !Object.values(req.query).length

        const totalSales = await ticketsService.totalSaleByUnity(
            unity,
            isEmpty ? undefined : req.query,
        )

        return res.status(HttpStatus.OK).json(totalSales)
    }
}

export const ticketsController = new TicketsController()
