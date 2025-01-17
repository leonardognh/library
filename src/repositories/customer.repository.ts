import { Customer } from "../models/customer.model";

const customers: Customer[] = [];

export class CustomerRepository {
  findAll(page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    return {
      data: customers.slice(startIndex, endIndex),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(customers.length / limit),
        totalItems: customers.length,
      },
    };
  }

  findById(id: number): Customer | undefined {
    return customers.find((customer) => customer.id === id);
  }

  create(customer: Customer): void {
    customers.push(customer);
  }

  update(id: number, updated: Partial<Customer>): Customer | undefined {
    const index = customers.findIndex((customer) => customer.id === id);
    if (index !== -1) {
      customers[index] = { ...customers[index], ...updated };
      return customers[index];
    }
    return undefined;
  }

  delete(id: number): boolean {
    const index = customers.findIndex((customer) => customer.id === id);
    if (index !== -1) {
      customers.splice(index, 1);
      return true;
    }
    return false;
  }
}
