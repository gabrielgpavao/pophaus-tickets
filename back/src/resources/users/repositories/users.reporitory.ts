import { User } from '../entities/users.entity'
import { tCreateUserInput, tUpdateUserInput } from '../types/users.type'

export abstract class UsersRepository {
    abstract create(data: tCreateUserInput): Promise<User>
    abstract findAll(): Promise<User[]>
    abstract findById(id: string): Promise<User>
    abstract update(id: string, data: tUpdateUserInput): Promise<User>
    abstract delete(id: string): Promise<void>
}
