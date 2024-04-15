import { Router } from "express";

// 9 - Recebendo a execução do Router
const authRouter = Router()

// 10 - Criando novo usuário
authRouter.post('/signup', authController.signup)

// 11 - Exportando o Router
export default authRouter;