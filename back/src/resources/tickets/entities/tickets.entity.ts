enum TicketStatus {
    AUTHORIZED = 'AUTHORIZED',
    USED = 'USED',
    REMOVED = 'REMOVED',
    FAILED = 'FAILED',
}

enum UnityEnum {
    SANTO_AMARO = 'SANTO_AMARO',
    TATUAPE = 'TATUAPE',
    BRASILIA = 'BRASILIA',
}

class Ticket {
    id: string
    template_id: string
    client_id: string
    status: TicketStatus
    date: Date | string
    filial: UnityEnum
    ticket_total: number
    created_at: Date | string
    updated_at: Date | string
}
export { TicketStatus, UnityEnum, Ticket }
