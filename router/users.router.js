import express from "express";
import usersController from "../controllers/user.controller.js";

const router = express.Router()

const { getUsers, createUser, getUsercreateUserById }= usersController;

router.get('/', getUsers);

router.get('/:id', getUsercreateUserById)

router.post('/', createUser);


export default router;