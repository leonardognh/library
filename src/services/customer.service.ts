import { CustomerRepository } from "../repositories/customer.repository";
import { Customer } from "../models/customer.model";

export class CustomerService {
  private repository: CustomerRepository;

  constructor(repository: CustomerRepository) {
    this.repository = repository;
  }

  getAll(page: number, limit: number, filter?: string) {
    return this.repository.findAll(page, limit, filter);
  }

  getById(id: number): Customer | undefined {
    return this.repository.findById(id);
  }

  create(customer: Customer): void {
    this.repository.create(customer);
  }

  update(id: number, updated: Partial<Customer>): Customer | undefined {
    return this.repository.update(id, updated);
  }

  delete(id: number): boolean {
    return this.repository.delete(id);
  }
}
