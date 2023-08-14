import express from "express";
import citiesRouter from "./cities.router.js"

const router = express.Router()

router.get("/", (request, response) => {
    console.log(request);
    response.send("Hello World");
});
router.use('/cities', citiesRouter);

export default router