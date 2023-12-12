import type { Knex } from 'knex'
import { database } from '../../../../database'
import { Ticket } from '../../entities/tickets.entity'
import { TicketsRepository } from '../tickets.reporitory'

class TicketsKnexRepository implements TicketsRepository {
    private queryBuilder: Knex.QueryBuilder

    constructor(tableName: string) {
        this.queryBuilder = database<Ticket>(tableName)
    }

    async findAll(): Promise<Ticket[]> {
        throw new Error('Method not implemented.')
    }

    async findById(id: string): Promise<Ticket> {
        throw new Error('Method not implemented.')
    }
}

export const ticketsRepository = new TicketsKnexRepository('tickets_und')
