import { Router } from "express";
import { verifyToken } from "../users/utils.js";

const router = Router();

// In-memory storage for products
let products = [];
let productIdCounter = 1;

// Helper to generate a simple ID (like MongoDB ObjectId hex string)
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Seed initial data if empty
const seedInitialData = () => {
  if (products.length === 0) {
    const initialProducts = [
      {
        id: generateId(),
        name: "Lírio Tropical",
        description: "Conjunto verão com estampa tropical vibrante",
        price: 160.30,
        image: "https://lojafarm.vtexassets.com/arquivos/ids/3658790-1743-2614/351174_53974_2-REGATA-LIRIO-TROPICAL-LENCO.jpg?v=638914000688500000",
        collection: "Verão 2026",
        installments: 10,
        stock: 50,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: generateId(),
        name: "Vestido Floral",
        description: "Vestido leve com flores delicadas",
        price: 199.90,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_923456-MLA50423357706_072022-F.webp",
        collection: "Primavera/Verão",
        installments: 12,
        stock: 30,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: generateId(),
        name: "Saia Jeans",
        description: "Saia midi em jeans com lavagem clara",
        price: 149.90,
        image: "https://a-static.mlcdn.com.br/618x463/saia-jeans-feminina-básica-midias/lojasantaclara/1234567890/9876543210.jpg",
        collection: "Essentials",
        installments: 8,
        stock: 40,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];
    products = [...products, ...initialProducts];
  }
};

// Initialize seed data
seedInitialData();

// Get all products (public)
router.get("/", async (req, res) => {
  try {
    // Return only active products
    const activeProducts = products.filter(p => p.active);
    res.json(activeProducts);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
});

// Get product by ID (public)
router.get("/:id", async (req, res) => {
  try {
    const product = products.find(p => p.id === req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }
    res.json(product);
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    res.status(500).json({ error: "Erro ao buscar produto" });
  }
});

// Create product (protected - auth required)
router.post("/", verifyToken, async (req, res) => {
  try {
    const newProduct = {
      id: generateId(),
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    res.status(500).json({ error: "Erro ao criar produto" });
  }
});

// Update product (protected - auth required)
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }
    const updatedProduct = {
      ...products[index],
      ...req.body,
      updatedAt: new Date(),
    };
    products[index] = updatedProduct;
    res.json(updatedProduct);
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    res.status(500).json({ error: "Erro ao atualizar produto" });
  }
});

// Delete product (protected - auth required)
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }
    const deletedProduct = products.splice(index, 1)[0];
    res.json({ message: "Produto removido com sucesso", product: deletedProduct });
  } catch (error) {
    console.error("Erro ao deletar produto:", error);
    res.status(500).json({ error: "Erro ao deletar produto" });
  }
});

export default router;