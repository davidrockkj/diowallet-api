// 4 - Importando o Express
import express, { json } from "express"
// 12 - Importando o Router
import authRouter from "./routes/authRoutes.js";
// 28 - Importando o 'connectDb'
import { connectDb } from "./config/database.js";
// 34 - Importando o 'dotenv'
import "dotenv/config";





// 5 - Armazenando a execução do Express
const app = express();

// 7 - Abrindo a porta '.get' --- [removido]
// 29 - Executando o 'connectDb'
connectDb();
// 23 - Falando para o App usar JSON
app.use(json())
// 13 - Implementando authRouter
app.use(authRouter)

// 6 - Criando a primeira rota
// 34 - Port como variável de ambiente
const port = process.env.PORT
app.listen(process.env.port, () => console.log(`Server listening in port ${port}`));