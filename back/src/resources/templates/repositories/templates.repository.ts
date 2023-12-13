import { Hour } from '../entities/hours.entity'

export abstract class TemplatesRepository {
    abstract listHoursByDate(date: string): Promise<Hour>

    abstract listDatesByUserEmail(email: string): Promise<{ date: string }[]>

    abstract counterClients(
        date: string,
    ): Promise<
        Record<'players' | 'not_players' | 'pcd' | 'total_clients', string>
    >
}
