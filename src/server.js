// 4 - Importando o Express
import express, { json } from "express"
// 12 - Importando o Router
import authRouter from "./routes/authRoutes.js";



// 5 - Armazenando a execução do Express
const app = express();

// 7 - Abrindo a porta '.get'
// -------------------------- removido

// 23 - Falando para o App usar JSON
app.use(json())

// 13 - Implementando authRouter
app.use(authRouter)

// 6 - Criando a primeira rota
app.listen(5000, () => console.log("Server listening in port 5000"));