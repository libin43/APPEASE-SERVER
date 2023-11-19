import userRoute from "./user";

export default function routes(app, express){
    app.use('/api/user', userRoute(express));
}