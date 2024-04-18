// 24 - Importando o Mongoose
import mongoose from "mongoose";

export async function connectDb() {
  // 25 - Adicionando a connection string
  const mongoUrl = "mongodb+srv://admin:admin@diowallet-cluster.nmprwtj.mongodb.net/?retryWrites=true&w=majority&appName=diowallet-cluster";

  try {
    // 26 - Conectando com o MongoDB
    await mongoose.connect(mongoUrl)
    console.log("Mongo Atlas connected!");
  } catch (err) {
    console.log(err.message);
  }
}

export async function disconnectDb() {
  // 27 - Desconectando do MongoDB
  await mongoose.disconnect();
}