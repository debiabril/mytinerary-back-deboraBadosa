import express from "express";
import usersController from "../controllers/user.controller.js";

const router = express.Router()

const { getUsers, createUser, getUserById }= usersController;

router.get('/', getUsers);

router.get('/:id', getUserById)

router.post('/', createUser);


export default router;