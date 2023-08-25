import express from "express";
import citiesRouter from "./cities.router.js";
import usersRouter from "./users.router.js";
import itinerariesRouter from "./itineraries.router.js "

const router = express.Router()

router.get("/", (request, response) => {
    console.log(request);
    response.send("Hello World");
});
router.use('/cities', citiesRouter);
router.use('/users', usersRouter);
router.use('/itineraries', itinerariesRouter);

export default router