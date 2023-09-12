import express from "express";
import citiesController from "../controllers/cities.controller.js";
import { validator } from "../middlewares/validator.js";
import { createCitySchema } from "../schema/city.schema.js";
import { isAdmin } from "../middlewares/isAdmin.middleware.js";
import passport from "../middlewares/passport.js";

const router = express.Router()

const { getCities, createCity, getCityById, updateCity, deleteCity }= citiesController;

router.get('/', getCities);

router.get('/:id', getCityById);

router.post('/', validator(createCitySchema), passport.authenticate('jwt', { session: false }) , createCity);

router.put('/:id', passport.authenticate('jwt', { session: false }), isAdmin, updateCity);

router.delete('/:id', passport.authenticate('jwt', { session: false }), isAdmin, deleteCity);

export default router;