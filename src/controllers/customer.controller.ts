import { Request, Response } from "express";
import { CustomerService } from "../services/customer.service";

const service = new CustomerService();

export const getAll = (req: Request, res: Response): void => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const result = service.getAll(page, limit);
  res.json(result);
};

export const getById = (req: Request, res: Response): void => {
  const customer = service.getById(req.params.id);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).send("Customer not found");
  }
};

export const create = (req: Request, res: Response): void => {
  service.create(req.body);
  res.status(201).send("Customer created");
};

export const update = (req: Request, res: Response): void => {
  const updated = service.update(req.params.id, req.body);
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).send("Customer not found");
  }
};

export const remove = (req: Request, res: Response): void => {
  if (service.delete(req.params.id)) {
    res.status(200).send("Customer deleted");
  } else {
    res.status(404).send("Customer not found");
  }
};
