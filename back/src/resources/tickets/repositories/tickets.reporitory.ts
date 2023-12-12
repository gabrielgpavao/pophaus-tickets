import { Ticket } from '../entities/tickets.entity'

export abstract class TicketsRepository {
    abstract findAll(): Promise<Ticket[]>
    abstract findById(id: string): Promise<Ticket>
}
