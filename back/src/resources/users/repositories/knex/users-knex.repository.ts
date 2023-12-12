import { QueryBuilder } from 'knex'
import { database } from '../../../../database'
import { User } from '../../entities/users.entity'
import { tCreateUserInput, tUpdateUserInput } from '../../types/users.type'
import { UsersRepository } from '../users.reporitory'

class UsersKnexRepository implements UsersRepository {
    private queryBuilder: QueryBuilder

    constructor(tableName: string) {
        this.queryBuilder = database(tableName)
    }

    async create(data: tCreateUserInput): Promise<User> {
        throw new Error('Method not implemented.')
    }

    async findAll(): Promise<User[]> {
        throw new Error('Method not implemented.')
    }

    async findById(id: string): Promise<User> {
        throw new Error('Method not implemented.')
    }

    async update(id: string, data: tUpdateUserInput): Promise<User> {
        throw new Error('Method not implemented.')
    }

    async delete(id: string): Promise<void> {
        throw new Error('Method not implemented.')
    }
}

export const usersRepository = new UsersKnexRepository('users')
