import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { body } from "express-validator";
import { validate } from "../middlewares/validate";
const prisma = new PrismaClient();
const router = Router();

router.get("/", async (req, res) => {
  try {
    const personas = await prisma.personas.findMany();
    res.json(personas);
    
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const persona = await prisma.personas.findUnique({
      where: { id: Number(req.params.id) },
    });
    res.json(persona);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.post(
  "/",
  body("nombre").isString().isLength({ max: 50 }),
  body("fechaNacimiento").toDate(),
  body("peso").isFloat({ min: 0 }),
  body("estatura").isFloat({ min: 0 }),
  validate,
  async (req, res) => {
    try {
      console.log({ data: req.body });
      const persona = await prisma.personas.create({ data: req.body });
      res.json(persona);
    } catch (error: unknown) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
);

router.put("/:id", async (req, res) => {
  try {
    const persona = await prisma.personas.update({
      data: req.body,
      where: { id: Number(req.params.id) },
    });
    res.json(persona);
  } catch (error: unknown) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const persona = await prisma.personas.delete({
      where: { id: Number(req.params.id) },
    });
    res.json(persona);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
