import { Knex } from 'knex'
import { TemplatesRepository, tCounterClients } from '../templates.repository'
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

    async counterClients(date: string): Promise<tCounterClients> {
        const [disabledPeople, people] = await Promise.all([
            this.queryBuilder
                .from('tickets_und')
                .where('date', date)
                .sum({ disabled_people: 'pcd_tickets' })
                .first(),

            database
                .from('orders_tickets')
                .where('date', date)
                .sum({
                    players: 'players',
                    not_players: 'not_players',
                })
                .first(),
        ])

        const counter = {
            ...disabledPeople,
            ...people,
        }

        return {
            ...counter,
            total_clients: Object.values(counter)
                .reduce<number>(
                    (prev, curr) => prev + parseInt(curr as string),
                    0,
                )
                .toString(),
        }
    }
}

export const templatesRepository = new TemplatesKnexRepository('templates')
