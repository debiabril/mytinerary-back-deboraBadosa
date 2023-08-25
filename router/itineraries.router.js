import express from "express";
import itinerariesController from "../controllers/itineraries.controller.js";

const router = express.Router()

const { getItineraries, createItinerary, getItineraryById, updateItinerary, deleteItinerary }= itinerariesController;

router.get('/', getItineraries);

router.get('/:id', getItineraryById);

router.post('/', createItinerary);

router.put('/:id', updateItinerary);

router.delete('/:id', deleteItinerary);

export default router;