import { Router } from "express";
import { CustomerController } from "../controllers/customer.controller";
import { dependencies } from "../dependencies";

const router = Router();

const { customerService } = dependencies;
const customerController = new CustomerController(customerService);

router.get("/", customerController.getAll);
router.get("/:id", customerController.getById);
router.post("/", customerController.create);
router.put("/:id", customerController.update);
router.delete("/:id", customerController.remove);

export default router;
