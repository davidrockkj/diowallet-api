// 36
import { Schema, model } from "mongoose";

// 36 - Criando uma constante
const UserSchema = new Schema({
  // 37 - Configurando o Schema a partir de um objeto
  name: { type: String, required: true },
  email: { type: String, unique:true, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() }
});

export default model("users", UserSchema);