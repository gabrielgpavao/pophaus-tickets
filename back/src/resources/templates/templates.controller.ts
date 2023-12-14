import { Request, Response } from 'express'
import { HttpStatus } from '../../constants/HttpStatus'
import { templatesService } from './templates.service'
import { dateParamSchema } from './schemas/templates.schema'

class TemplatesController {
    async listHoursByDate(req: Request, res: Response) {
        const dateParam = dateParamSchema.parse(req.params.date)
        const hours = await templatesService.listHoursByDate(dateParam)

        return res.status(HttpStatus.OK).json(hours)
    }
}

export const templatesController = new TemplatesController()
