import { Knex } from 'knex'
import { TemplatesRepository } from '../templates.repository'
import { database } from '../../../../database'
import { Template } from '../../entities/templates.entity'

class TemplatesKnexRepository implements TemplatesRepository {
    private queryBuilder: Knex.QueryBuilder

    constructor(tableName: string) {
        this.queryBuilder = database<Template>(tableName)
    }
}

export const templatesRepository = new TemplatesKnexRepository('templates')
