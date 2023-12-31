import { Request, Response } from 'express'
import { HttpStatus } from '../../constants/HttpStatus'
import { templatesService } from './templates.service'
import { dateParamSchema, emailParamSchema } from './schemas/templates.schema'

class TemplatesController {
    async listHoursByDate(req: Request, res: Response) {
        const dateParam = dateParamSchema.parse(req.params.date)
        const hours = await templatesService.listHoursByDate(dateParam)

        return res.status(HttpStatus.OK).json(hours)
    }

    async listDatesByUserEmail(req: Request, res: Response) {
        const emailParam = emailParamSchema.parse(req.params.email)
        const dates = await templatesService.listDatesByUserEmail(emailParam)

        return res.status(HttpStatus.OK).json(dates)
    }

    async counterClients(req: Request, res: Response) {
        const dateParam = dateParamSchema.parse(req.params.date)
        const counter = await templatesService.counterClients(dateParam)

        return res.status(HttpStatus.OK).json(counter)
    }
}

export const templatesController = new TemplatesController()
