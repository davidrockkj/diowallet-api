// 4 - Importando o Express
import express from "express"

// 5 - Armazenando a execução do Express
const app = express();

// 6 - Criando a primeira rota
app.listen(5000, () => console.log("Server listening in port 5000"));