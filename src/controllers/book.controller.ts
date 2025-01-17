// src/controllers/book.controller.ts
import { Request, Response } from "express";
import { BookService } from "../services/book.service";

const service = new BookService();

export const getAll = (req: Request, res: Response): void => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const result = service.getAll(page, limit);
  res.json(result);
};

export const getById = (req: Request, res: Response): void => {
  const book = service.getById(Number(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
};

export const getAllByAuthors = (req: Request, res: Response) => {
  const authorIds =
    (req.query.authorIds as string)?.split(",").map(Number) || [];
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const result = service.getAllByAuthors(authorIds, page, limit);
  res.json(result);
};
export const getAllByCategories = (req: Request, res: Response) => {
  const categoryIds =
    (req.query.categoryIds as string)?.split(",").map(Number) || [];
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const result = service.getAllByCategories(categoryIds, page, limit);
  res.json(result);
};

export const create = (req: Request, res: Response): void => {
  service.create(req.body);
  res.status(201).send("Book created");
};

export const update = (req: Request, res: Response): void => {
  const updated = service.update(Number(req.params.id), req.body);
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).send("Book not found");
  }
};

export const remove = (req: Request, res: Response): void => {
  if (service.delete(Number(req.params.id))) {
    res.status(200).send("Book deleted");
  } else {
    res.status(404).send("Book not found");
  }
};
