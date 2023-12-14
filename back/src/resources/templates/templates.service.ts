import { templatesRepository } from './repositories/knex/templates-knex.repository'
import { TemplatesRepository } from './repositories/templates.repository'

class TemplatesService {
    constructor(private readonly templatesRepository: TemplatesRepository) {}

    async listHoursByDate(date: string) {
        return await this.templatesRepository.listHoursByDate(date)
    }

    async listDatesByUserEmail(email: string) {
        return await this.templatesRepository.listDatesByUserEmail(email)
    }

    async counterClients(date: string) {
        return await this.templatesRepository.counterClients(date)
    }
}

const templatesService = new TemplatesService(templatesRepository)
export { TemplatesService, templatesService }
