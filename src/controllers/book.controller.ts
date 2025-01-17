// src/controllers/book.controller.ts
import { Request, Response } from "express";
import { BookService } from "../services/book.service";

export class BookController {
  private service: BookService;

  constructor(service: BookService) {
    this.service = service;
  }
  getAll = (req: Request, res: Response): void => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const result = this.service.getAll(page, limit);
    res.json(result);
  };

  getById = (req: Request, res: Response): void => {
    const book = this.service.getById(Number(req.params.id));
    if (book) {
      res.json(book);
    } else {
      res.status(404).send("Book not found");
    }
  };

  getAllByAuthors = (req: Request, res: Response) => {
    const authorIds =
      (req.query.authorIds as string)?.split(",").map(Number) || [];
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    console.log({ authorIds, page, limit });

    const result = this.service.getAllByAuthors(authorIds, page, limit);
    res.json(result);
  };
  getAllByCategories = (req: Request, res: Response) => {
    const categoryIds =
      (req.query.categoryIds as string)?.split(",").map(Number) || [];
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    console.log({ categoryIds, page, limit });

    const result = this.service.getAllByCategories(categoryIds, page, limit);
    res.json(result);
  };

  create = (req: Request, res: Response): void => {
    this.service.create(req.body);
    res.status(201).send("Book created");
  };

  update = (req: Request, res: Response): void => {
    const updated = this.service.update(Number(req.params.id), req.body);
    if (updated) {
      res.json(updated);
    } else {
      res.status(404).send("Book not found");
    }
  };

  remove = (req: Request, res: Response): void => {
    if (this.service.delete(Number(req.params.id))) {
      res.status(200).send("Book deleted");
    } else {
      res.status(404).send("Book not found");
    }
  };
}
