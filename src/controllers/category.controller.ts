import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";

const service = new CategoryService();

export const getAll = (req: Request, res: Response): void => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const result = service.getAll(page, limit);
  res.json(result);
};

export const getById = (req: Request, res: Response): void => {
  const category = service.getById(Number(req.params.id));
  if (category) {
    res.json(category);
  } else {
    res.status(404).send("Category not found");
  }
};

export const create = (req: Request, res: Response): void => {
  service.create(req.body);
  res.status(201).send("Category created");
};

export const update = (req: Request, res: Response): void => {
  const updated = service.update(Number(req.params.id), req.body);
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).send("Category not found");
  }
};

export const remove = (req: Request, res: Response): void => {
  if (service.delete(Number(req.params.id))) {
    res.status(200).send("Category deleted");
  } else {
    res.status(404).send("Category not found");
  }
};
