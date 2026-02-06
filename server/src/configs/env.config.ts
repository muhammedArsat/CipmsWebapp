import dotenv from 'dotenv'

dotenv.config({ quiet: true })

const DATABASE_URL = process.env.DATABASE_URL

export { DATABASE_URL }