import { Router } from "express";
// 18 - Importando o Controller
import authController from "../controllers/authController.js";

// 9 - Recebendo a execução do Router
const authRouter = Router()

// 10 - Criando novo usuário
authRouter.post('/signup', authController.signup)

// 11 - Exportando o Router
export default authRouter;