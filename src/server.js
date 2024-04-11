import express from "express"

/** Armazena a execução do Express
 * tudo que tem dentro do Express vai para o 'app'
 */
const app = express();

app.listen(5000, () => console.log("Server listening in port 5000"));