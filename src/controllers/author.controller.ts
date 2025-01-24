import { Request, Response } from "express";
import { AuthorService } from "../services/author.service";

export class AuthorController {
  private service: AuthorService;

  constructor(service: AuthorService) {
    this.service = service;
  }

  getAll = (req: Request, res: Response): void => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const filter = req.query.filter as string;

    const result = this.service.getAll(page, limit, filter);
    res.json(result);
  };

  getById = (req: Request, res: Response): void => {
    const author = this.service.getById(Number(req.params.id));
    if (author) {
      res.json(author);
    } else {
      res.status(404).json({ message: "Author not found" });
    }
  };

  create = (req: Request, res: Response): void => {
    this.service.create(req.body);
    res.status(201).json({ message: "Author created" });
  };

  update = (req: Request, res: Response): void => {
    const updated = this.service.update(Number(req.params.id), req.body);
    if (updated) {
      res.json(updated);
    } else {
      res.status(404).json({ message: "Author not found" });
    }
  };

  remove = (req: Request, res: Response): void => {
    if (this.service.delete(Number(req.params.id))) {
      res.status(200).json({ message: "Author deleted" });
    } else {
      res.status(404).json({ message: "Author not found" });
    }
  };
}
