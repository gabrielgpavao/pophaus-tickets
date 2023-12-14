import { UnityEnum } from '../../tickets/entities/tickets.entity'
import { Hour } from '../entities/hours.entity'

type tCounterClients = Record<
    'players' | 'not_players' | 'disabled_people' | 'total_clients',
    string
>
abstract class TemplatesRepository {
    abstract listHoursByDate(
        date: string,
    ): Promise<{ filial: UnityEnum; hours: Hour[] }[]>

    abstract listDatesByUserEmail(email: string): Promise<{ date: string }[]>

    abstract counterClients(date: string): Promise<tCounterClients>
}

export { tCounterClients, TemplatesRepository }
