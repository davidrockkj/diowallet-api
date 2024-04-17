// 24 - Importando o Mongoose
import mongoose from "mongoose";

export function connectDb() {
  // 25 - Adicionando a connection string
  const mongoUrl = "mongodb+srv://admin:admin@diowallet-cluster.nmprwtj.mongodb.net/?retryWrites=true&w=majority&appName=diowallet-cluster";

  // 26 - Conectando com o MongoDB
  mongoose.connect(mongoUrl)
}