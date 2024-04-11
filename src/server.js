import express from "express"

/** Armazena a execução do Express
 * tudo que tem dentro do Express vai para o 'app'
 */
const app = express();

/** Ligar o servidor e escutar a porta 5000
 *  mostrar mensagem ao usuário
 */
app.listen(5000, () => console.log("Server listening in port 5000"));