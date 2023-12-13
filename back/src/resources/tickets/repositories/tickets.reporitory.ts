import { Ticket, TicketStatus, UnityEnum } from '../entities/tickets.entity'

type tFilterOptions = {
    date?: string
    created_at?: string
}

abstract class TicketsRepository {
    abstract findAll(filterOptions?: tFilterOptions): Promise<Ticket[]>

    abstract countTicketByStatus(
        status: TicketStatus,
        filterOptions?: tFilterOptions,
    ): Promise<{ count: number }>

    abstract countTicketByUnity(
        unity: UnityEnum,
        filterOptions?: tFilterOptions,
    ): Promise<{ count: number }>

    abstract countTicketByUser(
        clientId: string,
        filterOptions?: tFilterOptions,
    ): Promise<{ count: number }>

    abstract totalSaleByUnity(
        unity: UnityEnum,
        filterOptions?: tFilterOptions,
    ): Promise<{ total_sale: number }>
}

export { tFilterOptions, TicketsRepository }
