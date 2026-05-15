import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { verifyToken } from "./utils.js";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();

// In-memory storage for users
let users = [];
let userIdCounter = 1;

// Helper to find user by email
const findUserByEmail = (email) => {
  return users.find(u => u.email === email);
};

// Helper to find user by id
const findUserById = (id) => {
  return users.find(u => u.id === id);
};

// GET all users (protected)
router.get("/", verifyToken, async (req, res) => {
  try {
    // Return users without passwords
    const usersWithoutPassword = users.map(({ password, ...rest }) => rest);
    res.json(usersWithoutPassword);
  } catch (error) {
    console.error("Erro ao buscar users:", error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Basic validation
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Nome, email e senha são obrigatórios" });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: "A senha deve ter pelo menos 6 caracteres" });
  }

  try {
    // Check if user already exists
    const existingUser = findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "Email já está em uso" });
    }

    const encryptedPassword = bcrypt.hashSync(password, bcryptSalt);
    const newUser = {
      id: userIdCounter++,
      name,
      email,
      password: encryptedPassword,
    };

    users.push(newUser);

    // Remove password from response
    const userObject = { ...newUser };
    delete userObject.password;

    res.status(201).json({
      message: "Usuário criado com sucesso",
      user: userObject
    });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuario" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email e senha são obrigatórios" });
  }

  try {
    const user = findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Remove password from response
    const userObject = { ...user };
    delete userObject.password;

    res.json({
      message: "Login realizado com sucesso",
      token,
      user: userObject
    });
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    res.status(500).json({ error: "Erro ao fazer login" });
  }
});

export default router;