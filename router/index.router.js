import express from "express";
import citiesRouter from "./cities.router.js";
import usersRouter from "./users.router.js";
import itinerariesRouter from "./itineraries.router.js "
import activitiesRouter from "./activities.router.js"


const router = express.Router()

router.get("/", (request, response) => {
    console.log(request);
    response.send("Hello World");
});
router.use('/cities', citiesRouter);
router.use('/users', usersRouter);
router.use('/itineraries', itinerariesRouter);
router.use('/activities', activitiesRouter);


export default router