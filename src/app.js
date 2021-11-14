import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";
import { errorHandler, notFound } from "./middlewares/error-handler.js";



const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

routes(app);

app.use(notFound);
app.use(errorHandler);

export default app;

