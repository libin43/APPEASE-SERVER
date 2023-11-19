import helmet from "helmet";


export default function expressConfig(app, express, config){
    app.use(helmet())
    app.listen(config.port,() => {
        console.log(`server running on port ${config.port}`);
      })
}