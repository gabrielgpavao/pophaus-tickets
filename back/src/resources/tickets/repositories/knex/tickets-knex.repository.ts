/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Knex } from 'knex'
import { database } from '../../../../database'
import { Ticket, TicketStatus, UnityEnum } from '../../entities/tickets.entity'
import { TicketsRepository, tFilterOptions } from '../tickets.reporitory'

class TicketsKnexRepository implements TicketsRepository {
    private queryBuilder: Knex.QueryBuilder

    constructor(tableName: string) {
        this.queryBuilder = database<Ticket>(tableName)
    }

    async findAll(filterOptions?: tFilterOptions): Promise<Ticket[]> {
        if (filterOptions) {
            if (filterOptions.created_at && filterOptions.date) {
                return await this.queryBuilder
                    .where('created_at', '>=', filterOptions.created_at)
                    .andWhere('date', '>=', filterOptions.date)
            }

            const [filterKey] = Object.keys(filterOptions)
            const [filterValue] = Object.values(filterOptions)

            return await this.queryBuilder
                .where(filterKey, '>=', filterValue)
                .orderBy(filterKey, 'asc')
        }

        return await this.queryBuilder
    }

    async countTicketByStatus(
        status: TicketStatus,
        filterOptions?: tFilterOptions,
    ): Promise<{ count: string }> {
        if (filterOptions) {
            if (filterOptions.created_at && filterOptions.date) {
                return await this.queryBuilder
                    .where('status', status)
                    .andWhere('created_at', '>=', filterOptions.created_at)
                    .andWhere('date', '>=', filterOptions.date)
                    .count('*')
            }

            const [filterKey] = Object.keys(filterOptions)
            const [filterValue] = Object.values(filterOptions)

            return await this.queryBuilder
                .where('status', status)
                .andWhere(filterKey, '>=', filterValue)
                .count('*')
        }

        return await this.queryBuilder.where('status', status).count('*')
    }

    async countTicketByUnity(
        unity: UnityEnum,
        filterOptions?: tFilterOptions,
    ): Promise<{ count: string }> {
        throw new Error('Method not implemented.')
    }

    async countTicketByUser(
        clientId: string,
        filterOptions?: tFilterOptions,
    ): Promise<{ count: string }> {
        throw new Error('Method not implemented.')
    }

    async totalSaleByUnity(
        unity: UnityEnum,
        filterOptions?: tFilterOptions,
    ): Promise<{ total_sale: number }> {
        throw new Error('Method not implemented.')
    }
}

export const ticketsRepository = new TicketsKnexRepository('tickets_und')
