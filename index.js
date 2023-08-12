import express from "express";
import morgan from "morgan";
import indexRouter from "./router/index.router.js"

const app = express(); 

/* app.use(cors()) */

app.use(morgan('dev'))

app.use('/api', indexRouter) 

app.listen(3000, () => {
    console.log("Server running on port 3000");
})

