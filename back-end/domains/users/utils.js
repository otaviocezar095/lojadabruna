import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ error: "Token não fornecido" });
  }

  // Remove 'Bearer ' prefix if present
  const cleanToken = token.startsWith("Bearer ") ? token.slice(7) : token;

  jwt.verify(cleanToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token inválido ou expirado" });
    }
    req.userId = decoded.userId;
    next();
  });
};

export const isAdmin = async (req, res, next) => {
  // In a real app, you'd check if the user is an admin from the database
  // For now, we'll just pass through (you can implement role-based logic later)
  next();
};