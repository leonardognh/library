import { Router } from "express";
import { BookController } from "../controllers/book.controller";
import { dependencies } from "../dependencies";

const router = Router();

const { bookService } = dependencies;
const bookController = new BookController(bookService);

router.get("/authors", bookController.getAllByAuthors);
router.get("/categories", bookController.getAllByCategories);

router.get("/", bookController.getAll);
router.get("/:id", bookController.getById);
router.post("/", bookController.create);
router.put("/:id", bookController.update);
router.delete("/:id", bookController.remove);

export default router;
