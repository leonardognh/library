import { ItemSale } from "../models/itemSale.model";
import { Book } from "../models/book.model";
import { BookRepository } from "../repositories/book.repository";

const itemSales: ItemSale[] = [];

export class ItemSaleRepository {
  private bookRepository: BookRepository;

  constructor(bookRepository: BookRepository) {
    this.bookRepository = bookRepository;
  }
  private getBookById(bookId: number): Book | undefined {
    return this.bookRepository.findById(bookId);
  }
  findAll(page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedSales = itemSales.slice(startIndex, endIndex);

    const data = paginatedSales.map((itemSale) => ({
      ...itemSale,
      book: this.getBookById(itemSale.bookId),
    }));

    return {
      data,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(itemSales.length / limit),
        totalItems: itemSales.length,
      },
    };
  }

  findById(id: number): ItemSale | undefined {
    const itemSale = itemSales.find((itemSale) => itemSale.id === id);
    if (itemSale) {
      return {
        ...itemSale,
        book: this.getBookById(itemSale.bookId),
      };
    }
    return undefined;
  }
  filterBySaleId(saleId: number): ItemSale[] {
    return itemSales.filter((itemSale) => itemSale.saleId === saleId);
  }

  create(itemSale: ItemSale): void {
    itemSale.id = this.generateNewId();
    itemSales.push(itemSale);
  }

  update(id: number, updated: Partial<ItemSale>): ItemSale | undefined {
    const index = itemSales.findIndex((itemSale) => itemSale.id === id);
    if (index !== -1) {
      itemSales[index] = { ...itemSales[index], ...updated };
      return itemSales[index];
    }
    return undefined;
  }

  delete(id: number): boolean {
    const index = itemSales.findIndex((itemSale) => itemSale.id === id);
    if (index !== -1) {
      itemSales.splice(index, 1);
      return true;
    }
    return false;
  }
  private generateNewId() {
    const maxId =
      itemSales.length > 0
        ? Math.max(...itemSales.map((itemSale) => itemSale.id))
        : 0;

    return maxId + 1;
  }
}
