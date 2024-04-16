// 20 - importando o authService no authController
import authService from "../services/authService.js";

// 15 - Criando a função signup
function signup(req, res) {
  // 16 - Armazenando as informações do fomulário
  const body = req.body;

  // 17 - Validando as informações e armazenando as informações
  const resService = authService.signup(body);

  // 21 - Enviando a resposta da função
  res.send(resService);
}

export default { signup }