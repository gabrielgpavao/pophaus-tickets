import { TicketsService, ticketsService } from './tickets.service'

class TicketsController {
    constructor(private readonly ticketsService: TicketsService) {}
}

export const ticketsController = new TicketsController(ticketsService)
