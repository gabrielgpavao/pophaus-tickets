import { usersRepository } from './repositories/knex/users-knex.repository'
import { UsersRepository } from './repositories/users.reporitory'

class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}
}

const usersService = new UsersService(usersRepository)

export { UsersService, usersService }
