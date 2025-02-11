import { Request, Response } from "express";
import { SaleService } from "../services/sale.service";

export class SaleController {
  private service: SaleService;

  constructor(service: SaleService) {
    this.service = service;
  }

  getAll = (req: Request, res: Response): void => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const result = this.service.getAll(page, limit);
    res.json(result);
  };

  getById = (req: Request, res: Response): void => {
    const sale = this.service.getById(Number(req.params.id));
    if (sale) {
      res.json(sale);
    } else {
      res.status(404).json({ message: "Sale not found" });
    }
  };

  create = (req: Request, res: Response): void => {
    this.service.create(req.body);
    res.status(201).json({ message: "Sale created" });
  };

  update = (req: Request, res: Response): void => {
    const updated = this.service.update(Number(req.params.id), req.body);
    if (updated) {
      res.json(updated);
    } else {
      res.status(404).json({ message: "Sale not found" });
    }
  };

  remove = (req: Request, res: Response): void => {
    if (this.service.delete(Number(req.params.id))) {
      res.status(200).json({ message: "Sale deleted" });
    } else {
      res.status(404).json({ message: "Sale not found" });
    }
  };
}
