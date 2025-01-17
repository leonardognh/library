import { Router } from "express";
import { CategoryController } from "../controllers/category.controller";
import { dependencies } from "../dependencies";

const router = Router();

const { categoryService } = dependencies;
const categoryController = new CategoryController(categoryService);

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getById);
router.post("/", categoryController.create);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.remove);

export default router;
