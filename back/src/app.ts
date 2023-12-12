import 'express-async-errors'
import express, { Application } from 'express'
import cors from 'cors'
import { handleErrorsMiddleware } from './middlewares/error.middelware'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use(handleErrorsMiddleware)

const PORT = 3000
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})
