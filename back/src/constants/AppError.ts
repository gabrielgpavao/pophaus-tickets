import { HttpStatus } from './HttpStatus'

export class AppError extends Error {
    statusCode: HttpStatus

    constructor(
        name: string,
        message: string,
        statusCode = HttpStatus.BAD_REQUEST,
    ) {
        super(message)
        this.name = name
        this.statusCode = statusCode
    }
}
