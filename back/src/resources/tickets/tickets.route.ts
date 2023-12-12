import { Request, Response, Router } from 'express'
import { ticketsController } from './tickets.controller'

export const ticketsRoute = Router()

ticketsRoute.get('/', (req: Request, res: Response) => {
    ticketsController.findAll(req, res)
})
