import { UsersService, usersService } from './users.service'

class UsersController {
    constructor(private readonly usersService: UsersService) {}
}

export const usersController = new UsersController(usersService)
