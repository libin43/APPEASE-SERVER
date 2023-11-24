import helmet from "helmet";
import cors from 'cors';
import cookieParser from "cookie-parser";


export default function expressConfig(app, express, config) {
  app.use(helmet())

  const corsOptions = {
    "origin": "http://localhost:5173",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "allowedHeaders": "Content-Type, Authorization",
    "credentials": true,
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }

  app.use(cors(corsOptions))

  app.use(express.json());
  
  app.use(express.urlencoded({ extended: true }))
  
  app.use(cookieParser())

  app.listen(config.port, () => {
    console.log(`server running on port ${config.port}`);
  })
}