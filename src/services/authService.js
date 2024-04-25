// 41 - importando o bcrypt
import bcrypt from "bcrypt";
// 45 - importando o authRepository
import authRepository from "../repositories/authRepository.js";

// 19 - Criando a função 'signup' do Service
function signup(body) {
  // 22 - Retornando o body
  // [REMOVIDO no passo 39]

  // 42 - criando uma hashPassword
  const hasPassword = bcrypt.hashSync(body.password, 10)
  
  // 46 - criando um usuário no authRepository
  authRepository.create({ ...body, password: hasPassword })
}

export default { signup };