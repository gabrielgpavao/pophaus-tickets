import { Router } from 'express'
import { templatesController } from './templates.controller'

export const templatesRoute = Router()

templatesRoute.get('/hours/:date', templatesController.listHoursByDate)

templatesRoute.get('/dates/:email', templatesController.listDatesByUserEmail)
