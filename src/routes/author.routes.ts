import { Router } from "express";
import { AuthorController } from "../controllers/author.controller";
import { dependencies } from "../dependencies";

const router = Router();

const { authorService } = dependencies;
const authorController = new AuthorController(authorService);

router.get("/", authorController.getAll);
router.get("/:id", authorController.getById);
router.post("/", authorController.create);
router.put("/:id", authorController.update);
router.delete("/:id", authorController.remove);

export default router;
