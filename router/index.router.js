import express from "express";
import citiesRouter from "./cities.router.js";
import usersRouter from "./users.router.js";
import itinerariesRouter from "./itineraries.router.js ";
import activitiesRouter from "./activities.router.js";
import authRouter from './auth.router.js';


const router = express.Router()

router.get("/", (request, response) => {
    console.log(request);
    response.send("Prueba de Hello World");
});
router.use('/cities', citiesRouter);
router.use('/users', usersRouter);
router.use('/itineraries', itinerariesRouter);
router.use('/activities', activitiesRouter);
router.use('/auth', authRouter);

export default router