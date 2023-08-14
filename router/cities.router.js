import express from "express";
import citiesController from "../controllers/cities.Controllers.js";

const router = express.Router()

router.get('/', citiesController.getCities);


export default router;