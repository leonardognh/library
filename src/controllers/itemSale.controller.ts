import { Request, Response } from "express";
import { ItemSaleService } from "../services/itemSale.service";

export class ItemSaleController {
  private service: ItemSaleService;

  constructor(service: ItemSaleService) {
    this.service = service;
  }

  getAll = (req: Request, res: Response): void => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const result = this.service.getAll(page, limit);
    res.json(result);
  };
  getById = (req: Request, res: Response): void => {
    const itemSale = this.service.getById(Number(req.params.id));
    if (itemSale) {
      res.json(itemSale);
    } else {
      res.status(404).json({ message: "ItemSale not found" });
    }
  };

  create = (req: Request, res: Response): void => {
    this.service.create(req.body);
    res.status(201).json({ message: "ItemSale created" });
  };

  update = (req: Request, res: Response): void => {
    const updated = this.service.update(Number(req.params.id), req.body);
    if (updated) {
      res.json(updated);
    } else {
      res.status(404).json({ message: "ItemSale not found" });
    }
  };

  remove = (req: Request, res: Response): void => {
    if (this.service.delete(Number(req.params.id))) {
      res.status(200).json({ message: "ItemSale deleted" });
    } else {
      res.status(404).json({ message: "ItemSale not found" });
    }
  };
}
