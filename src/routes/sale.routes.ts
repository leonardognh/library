import { Router } from "express";
import { SaleController } from "../controllers/sale.controller";
import { dependencies } from "../dependencies";

const router = Router();

const { saleService } = dependencies;
const saleController = new SaleController(saleService);

router.get("/", saleController.getAll);
router.get("/:id", saleController.getById);
router.post("/", saleController.create);
router.put("/:id", saleController.update);
router.delete("/:id", saleController.remove);
export default router;
