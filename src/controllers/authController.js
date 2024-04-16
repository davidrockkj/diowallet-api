// 15 - Criando a função signup
function signup(req, res) {
  // 16 - Armazenando as informações do fomulário
  const body = req.body;

  // 17 - Validando as informações
  authService.signup(body);
}

export default { signup }