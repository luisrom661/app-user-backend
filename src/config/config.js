import 'dotenv/config'

export const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    dbUser: process.env.FL0_DB_USERNAME,
    dbPassword: process.env.FL0_DB_PASSWORD,
    dbHost: process.env.FL0_DB_HOST,
    dbName: process.env.FL0_DB_NAME,
    dbPort: process.env.FL0_DB_PORT,
}