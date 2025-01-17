import { SaleRepository } from "../repositories/sale.repository";
import { Sale } from "../models/sale.model";

export class SaleService {
  private repository = new SaleRepository();

  getAll(page: number, limit: number) {
    return this.repository.findAll(page, limit);
  }

  getById(id: string): Sale | undefined {
    return this.repository.findById(id);
  }

  create(sale: Sale): void {
    this.repository.create(sale);
  }

  update(id: string, updated: Partial<Sale>): Sale | undefined {
    return this.repository.update(id, updated);
  }

  delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
