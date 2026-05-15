import "dotenv/config";
import express from "express";
import userRoutes from "./domains/users/routes.js";
import productRoutes from "./domains/products/routes.js";
import cors from "cors";

console.log('Hello from index.js');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"], // Vite default ports
  credentials: true
}));
app.use(express.json());

// Rotas
app.use("/users", userRoutes);
app.use("/products", productRoutes);

// Rota de teste
app.get("/", (req, res) => {
  res.json({ message: "API da Loja da Bruna está funcionando!" });
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Algo deu errado!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});