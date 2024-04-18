// 24 - Importando o Mongoose
import mongoose from "mongoose";

export async function connectDb() {
  // 25 - Adicionando a connection string
  const mongoUrl = "mongodb+srv://admin:admin@diowallet-cluster.nmprwtj.mongodb.net/?retryWrites=true&w=majority&appName=diowallet-cluster";

  try {
    // 26 - Conectando com o MongoDB
    await mongoose.connect(mongoUrl)
  } catch (err) {
    console.log(err.message);
  }
}