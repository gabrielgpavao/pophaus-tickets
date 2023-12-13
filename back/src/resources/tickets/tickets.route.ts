import { Router } from 'express'
import { ticketsController } from './tickets.controller'
import { validateQueryMiddleware } from './middlewares/validate-query.middleware'

export const ticketsRoute = Router()

ticketsRoute.get('/', validateQueryMiddleware, ticketsController.findAll)

ticketsRoute.get(
    '/status/:status/count',
    validateQueryMiddleware,
    ticketsController.countTicketByStatus,
)

ticketsRoute.get(
    '/unity/:unity/count',
    validateQueryMiddleware,
    ticketsController.countTicketByUnity,
)

ticketsRoute.get(
    '/user/:id/count',
    validateQueryMiddleware,
    ticketsController.countTicketByUser,
)

ticketsRoute.get(
    '/unity/:unity/sales',
    validateQueryMiddleware,
    ticketsController.totalSalesByUnity,
)
