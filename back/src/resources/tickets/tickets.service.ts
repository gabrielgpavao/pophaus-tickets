import { ticketsRepository } from './repositories/knex/tickets-knex.repository'
import { TicketsRepository } from './repositories/tickets.reporitory'

class TicketsService {
    constructor(private readonly ticketsRepository: TicketsRepository) {}
}

const ticketsService = new TicketsService(ticketsRepository)

export { TicketsService, ticketsService }
