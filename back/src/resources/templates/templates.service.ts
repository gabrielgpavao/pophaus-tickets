import { templatesRepository } from './repositories/knex/templates-knex.repository'
import { TemplatesRepository } from './repositories/templates.repository'

class TemplatesService {
    constructor(private readonly templatesRepository: TemplatesRepository) {}
}

const templatesService = new TemplatesService(templatesRepository)
export { TemplatesService, templatesService }
