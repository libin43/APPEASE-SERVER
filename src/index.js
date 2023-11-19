import express from 'express'
import mongoose from 'mongoose';
import expressConfig from './frameworks/webservers/express.js';
import mongoConnection from './frameworks/databases/mongoDB/connection.js';
import config from './config/config.js';
import errorHandle from './frameworks/webservers/middlewares/errorHandle.js';

const app = express();
expressConfig(app, express, config)
mongoConnection(mongoose, config,{
    connectTimeoutMS: 5000,
}).connectToMongo()


app.use(errorHandle)

// export default app;