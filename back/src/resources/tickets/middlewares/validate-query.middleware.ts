import { NextFunction, Request, Response } from 'express'
import { filterOptionsSchema } from '../schemas/tickets.schema'

export function validateQueryMiddleware(
    req: Request,
    _: Response,
    next: NextFunction,
) {
    req.query = filterOptionsSchema.parse(req.query)
    return next()
}
