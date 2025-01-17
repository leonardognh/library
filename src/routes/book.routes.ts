import { Router } from "express";
import {
  getAll,
  getById,
  getAllByAuthors,
  getAllByCategories,
  create,
  update,
  remove,
} from "../controllers/book.controller";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.get("/authors", getAllByAuthors);
router.get("/categories", getAllByCategories);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;
