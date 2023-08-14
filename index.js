import express from "express";
import morgan from "morgan";
import cors from "cors";
import indexRouter from "./router/index.router.js";


const app = express(); 

/* app.use(cors()) */
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(morgan('dev'));
app.use(cors());

app.use('/api', indexRouter) 

app.listen(3000, () => {
    console.log("Server running on port 3000");
})

