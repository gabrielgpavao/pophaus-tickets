/* eslint-disable @typescript-eslint/no-unused-vars */
import { Knex } from 'knex'
import { TemplatesRepository } from '../templates.repository'
import { database } from '../../../../database'
import { Template } from '../../entities/templates.entity'
import { Hour } from '../../entities/hours.entity'
import { UnityEnum } from '../../../tickets/entities/tickets.entity'

class TemplatesKnexRepository implements TemplatesRepository {
    private queryBuilder: Knex.QueryBuilder

    constructor(tableName: string) {
        this.queryBuilder = database<Template>(tableName)
    }

    async listHoursByDate(
        date: string,
    ): Promise<{ filial: UnityEnum; hours: Hour[] }[]> {
        return await this.queryBuilder
            .select('filial', 'hours')
            .where('date', date)
    }

    async listDatesByUserEmail(email: string): Promise<{ date: string }[]> {
        return await this.queryBuilder
            .from('tickets_und')
            .join('users', 'tickets_und.client_id', '=', 'users.id')
            .select('tickets_und.date')
            .where('users.email', email)
    }

    async counterClients(
        date: string,
    ): Promise<
        Record<'players' | 'not_players' | 'pcd' | 'total_clients', string>
    > {
        throw new Error('Method not implemented.')
    }
}

export const templatesRepository = new TemplatesKnexRepository('templates')
