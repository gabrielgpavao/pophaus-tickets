import type { Knex } from 'knex'
import 'dotenv/config'

const environments = ['development', 'staging', 'production'] as const

const connection: Knex.ConnectionConfig = {
    host: process.env.DB_DNS as string,
    database: process.env.DB_NAME as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
}

const commonConfig: Knex.Config = {
    client: 'pg',
    connection,
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: 'src/database/migrations',
    },
}

export default Object.fromEntries(
    environments.map((env: string) => [env, commonConfig]),
)
