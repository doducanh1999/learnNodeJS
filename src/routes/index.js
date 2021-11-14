import authRoute from "./auth.route.js";
import userRoute from "./user.route.js";

export default (app) => {
    app.get('/', (req,res) =>{
        res.send('Hello');
    });

    userRoute(app);
    authRoute(app);
}