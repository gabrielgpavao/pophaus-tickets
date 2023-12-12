/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import { AppError } from '../constants/AppError'
import { ZodError } from 'zod'
import { HttpStatus } from '../constants/HttpStatus'

export function handleErrorsMiddleware(
    error: Error,
    _request: Request,
    response: Response,
    _next: NextFunction,
): Response {
    if (error instanceof AppError) {
        return response
            .status(error.statusCode)
            .json({ name: error.name, message: error.message })
    }

    if (error instanceof ZodError) {
        return response
            .status(HttpStatus.BAD_REQUEST)
            .json({ message: error.flatten().fieldErrors })
    }

    console.error(error)
    return response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' })
}
