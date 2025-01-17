import { CustomerRepository } from "../repositories/customer.repository";
import { Customer } from "../models/customer.model";

export class CustomerService {
  private repository = new CustomerRepository();

  getAll(page: number, limit: number) {
    return this.repository.findAll(page, limit);
  }

  getById(id: string): Customer | undefined {
    return this.repository.findById(id);
  }

  create(customer: Customer): void {
    this.repository.create(customer);
  }

  update(id: string, updated: Partial<Customer>): Customer | undefined {
    return this.repository.update(id, updated);
  }

  delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
