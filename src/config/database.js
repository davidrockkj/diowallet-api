// 24 - Importando o Mongoose
import mongoose from "mongoose";
// 32 - Importando o 'dotenv'
import "dotenv/config";

export async function connectDb() {
  // 25 - Adicionando a connection string
  // [MOVIDO PARA '.env' no passo 30]

  try {
    // 26 - Conectando com o MongoDB
    await mongoose.connect(DATABASE_URI)
    console.log("Mongo Atlas connected!");
  } catch (err) {
    console.log(err.message);
  }
}

export async function disconnectDb() {
  // 27 - Desconectando do MongoDB
  await mongoose.disconnect();
}