import express from "express";
import citiesController from "../controllers/cities.controller.js";
import { validator } from "../middlewares/validator.js";
import { createCitySchema } from "../schema/city.schema.js";
import { isAdmin } from "../middlewares/isAdmin.middleware.js";

const router = express.Router()

const { getCities, createCity, getCityById, updateCity, deleteCity }= citiesController;

router.get('/', getCities);

router.get('/:id', getCityById);

router.post('/', validator(createCitySchema), createCity);

router.put('/:id', /* isAdmin, */ updateCity);

router.delete('/:id',/*  isAdmin, */ deleteCity);

export default router;