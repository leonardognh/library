import { ItemSale } from "../models/itemSale.model";

const itemSales: ItemSale[] = [];

export class ItemSaleRepository {
  findAll(page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    return {
      data: itemSales.slice(startIndex, endIndex),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(itemSales.length / limit),
        totalItems: itemSales.length,
      },
    };
  }

  findById(id: string): ItemSale | undefined {
    return itemSales.find((itemSale) => itemSale.id === id);
  }

  create(itemSale: ItemSale): void {
    itemSales.push(itemSale);
  }

  update(id: string, updated: Partial<ItemSale>): ItemSale | undefined {
    const index = itemSales.findIndex((itemSale) => itemSale.id === id);
    if (index !== -1) {
      itemSales[index] = { ...itemSales[index], ...updated };
      return itemSales[index];
    }
    return undefined;
  }

  delete(id: string): boolean {
    const index = itemSales.findIndex((itemSale) => itemSale.id === id);
    if (index !== -1) {
      itemSales.splice(index, 1);
      return true;
    }
    return false;
  }
}
