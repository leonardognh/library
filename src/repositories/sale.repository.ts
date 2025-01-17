import { Sale } from "../models/sale.model";

const sales: Sale[] = [];

export class SaleRepository {
  findAll(page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    return {
      data: sales.slice(startIndex, endIndex),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(sales.length / limit),
        totalItems: sales.length,
      },
    };
  }

  findById(id: number): Sale | undefined {
    return sales.find((sale) => sale.id === id);
  }

  create(sale: Sale): void {
    sales.push(sale);
  }

  update(id: number, updated: Partial<Sale>): Sale | undefined {
    const index = sales.findIndex((sale) => sale.id === id);
    if (index !== -1) {
      sales[index] = { ...sales[index], ...updated };
      return sales[index];
    }
    return undefined;
  }

  delete(id: number): boolean {
    const index = sales.findIndex((sale) => sale.id === id);
    if (index !== -1) {
      sales.splice(index, 1);
      return true;
    }
    return false;
  }
}
