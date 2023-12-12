import type { Knex } from 'knex'
import { database } from '../../../../database'
import { Ticket, TicketStatus, UnityEnum } from '../../entities/tickets.entity'
import { TicketsRepository, tFilterOptions } from '../tickets.reporitory'

class TicketsKnexRepository implements TicketsRepository {
    private queryBuilder: Knex.QueryBuilder

    constructor(tableName: string) {
        this.queryBuilder = database<Ticket>(tableName)
    }

    async findAll(filterOptions: tFilterOptions): Promise<Ticket[]> {
        throw new Error('Method not implemented.')
    }

    async countTicketByStatus(
        status: TicketStatus,
        filterOptions: tFilterOptions,
    ): Promise<{ count: number }> {
        throw new Error('Method not implemented.')
    }

    async countTicketByUnity(
        unity: UnityEnum,
        filterOptions: tFilterOptions,
    ): Promise<{ count: number }> {
        throw new Error('Method not implemented.')
    }

    async countTicketByUser(
        clientId: string,
        filterOptions: tFilterOptions,
    ): Promise<{ count: number }> {
        throw new Error('Method not implemented.')
    }

    async totalSaleByUnity(
        unity: UnityEnum,
        filterOptions: tFilterOptions,
    ): Promise<{ total_sale: number }> {
        throw new Error('Method not implemented.')
    }
}

export const ticketsRepository = new TicketsKnexRepository('tickets_und')
