enum TicketStatus {
    AUTHORIZED = 'AUTHORIZED',
    USED = 'USED',
    REMOVED = 'REMOVED',
    FAILED = 'FAILED',
}

class Ticket {
    id: string
    template_id: string
    client_id: string
    status: TicketStatus
    date: string
    filial: string
    ticket_total: number
    created_at: Date
    updated_at: Date
}
export { TicketStatus, Ticket }
