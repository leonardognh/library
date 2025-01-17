import { Router } from "express";
import { ItemSaleController } from "../controllers/itemSale.controller";
import { dependencies } from "../dependencies";

const router = Router();

const { itemSaleService } = dependencies;
const itemSaleController = new ItemSaleController(itemSaleService);

router.get("/", itemSaleController.getAll);
router.get("/:id", itemSaleController.getById);
router.post("/", itemSaleController.create);
router.put("/:id", itemSaleController.update);
router.delete("/:id", itemSaleController.remove);

export default router;
