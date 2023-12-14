import { templatesRepository } from './repositories/knex/templates-knex.repository'
import { TemplatesRepository } from './repositories/templates.repository'

class TemplatesService {
    constructor(private readonly templatesRepository: TemplatesRepository) {}

    async listHoursByDate(date: string) {
        return await this.templatesRepository.listHoursByDate(date)
    }
}

const templatesService = new TemplatesService(templatesRepository)
export { TemplatesService, templatesService }
