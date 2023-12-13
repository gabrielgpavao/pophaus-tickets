/* eslint-disable @typescript-eslint/no-unused-vars */
import { Knex } from 'knex'
import { TemplatesRepository } from '../templates.repository'
import { database } from '../../../../database'
import { Template } from '../../entities/templates.entity'
import { Hour } from '../../entities/hours.entity'

class TemplatesKnexRepository implements TemplatesRepository {
    private queryBuilder: Knex.QueryBuilder

    constructor(tableName: string) {
        this.queryBuilder = database<Template>(tableName)
    }

    async listHoursByDate(date: string): Promise<Hour> {
        throw new Error('Method not implemented.')
    }

    async listDatesByUserEmail(email: string): Promise<{ date: string }[]> {
        throw new Error('Method not implemented.')
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
