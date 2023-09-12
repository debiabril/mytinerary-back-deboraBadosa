import 'dotenv/config.js';
import'./config/db.js';
import express from "express";
import morgan from "morgan";
import cors from "cors";
import indexRouter from "./router/index.router.js";
import { notFound } from './middlewares/notFound.middleware.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';

const app = express(); 
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(morgan('dev'));
app.use(cors());
/* app.use((req, res, next)=>{
    console.log('Se ejecutó el middleware que hice')
    next()
}) */
app.use('/api', indexRouter)
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
})

