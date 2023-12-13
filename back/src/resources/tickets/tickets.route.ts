import { Router } from 'express'
import { ticketsController } from './tickets.controller'
import { validateQueryMiddleware } from './middlewares/validate-query.middleware'

export const ticketsRoute = Router()

ticketsRoute.get('/', validateQueryMiddleware, ticketsController.findAll)
