import Knex from 'knex'
import configs from '../../knexfile'
import 'dotenv/config'

export const database = Knex(configs[process.env.NODE_ENV || 'development'])
