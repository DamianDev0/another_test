import { Router } from "express";
import UserController from "../controllers/userController";
import { authenticateJWT } from "../middlewares/authMIddleware"; // utilizamos el middleware para auteticar


export const userRouter = Router()

// hacemos unas rutas publicas y otras privadas con JWT 

userRouter.get('/', authenticateJWT,UserController.getAllUser)
userRouter.get('/:id', authenticateJWT,UserController.getUserById)
userRouter.post('/', UserController.createUser)
userRouter.put('/:id', authenticateJWT,UserController.updateUser)
userRouter.delete('/:id',authenticateJWT, UserController.deleteUser)
userRouter.post('/login', UserController.login)
userRouter.get('/role/:role', UserController.getUserByRole);
