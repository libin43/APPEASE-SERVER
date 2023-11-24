import dotenv from 'dotenv'
dotenv.config()

export default {
    port: process.env.PORT,
    devOriginPort: process.env.DEV_ORIGIN_PORT,
    productionOriginPort: process.env.PRODUCTION_ORIGIN_PORT,
    mongo: {
        uri: process.env.MONGO_URL
    },
}