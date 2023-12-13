import { TicketStatus, UnityEnum } from './entities/tickets.entity'
import { ticketsRepository } from './repositories/knex/tickets-knex.repository'
import {
    TicketsRepository,
    tFilterOptions,
} from './repositories/tickets.reporitory'

class TicketsService {
    constructor(private readonly ticketsRepository: TicketsRepository) {}

    async findAll(filterOptions?: tFilterOptions) {
        return await this.ticketsRepository.findAll(filterOptions)
    }

    async countTicketByStatus(
        ticketStatus: TicketStatus,
        filterOptions?: tFilterOptions,
    ) {
        return await this.ticketsRepository.countTicketByStatus(
            ticketStatus,
            filterOptions,
        )
    }

    async countTicketByUnity(unity: UnityEnum, filterOptions?: tFilterOptions) {
        return await this.ticketsRepository.countTicketByUnity(
            unity,
            filterOptions,
        )
    }
}

const ticketsService = new TicketsService(ticketsRepository)

export { TicketsService, ticketsService }
