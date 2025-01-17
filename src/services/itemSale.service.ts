import { ItemSaleRepository } from "../repositories/itemSale.repository";
import { ItemSale } from "../models/itemSale.model";

export class ItemSaleService {
  private repository = new ItemSaleRepository();

  getAll(page: number, limit: number) {
    return this.repository.findAll(page, limit);
  }

  getById(id: string): ItemSale | undefined {
    return this.repository.findById(id);
  }

  create(itemSale: ItemSale): void {
    this.repository.create(itemSale);
  }

  update(id: string, updated: Partial<ItemSale>): ItemSale | undefined {
    return this.repository.update(id, updated);
  }

  delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
