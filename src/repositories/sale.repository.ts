import { ItemSale } from "../models/itemSale.model";
import { Customer } from "../models/customer.model";
import { Sale } from "../models/sale.model";
import { Book } from "../models/book.model";
import { BookRepository } from "../repositories/book.repository";
import { CustomerRepository } from "../repositories/customer.repository";
import { ItemSaleRepository } from "../repositories/itemSale.repository";

const sales: Sale[] = [];

export class SaleRepository {
  private customerRepository: CustomerRepository;
  private itemSaleRepository: ItemSaleRepository;
  private bookRepository: BookRepository;
  constructor(
    customerRepository: CustomerRepository,
    itemSaleRepository: ItemSaleRepository,
    bookRepository: BookRepository
  ) {
    this.customerRepository = customerRepository;
    this.itemSaleRepository = itemSaleRepository;
    this.bookRepository = bookRepository;
  }
  private getCustomerById(customerId: number): Customer | undefined {
    return this.customerRepository.findById(customerId);
  }
  private getBookById(bookId: number): Book | undefined {
    return this.bookRepository.findById(bookId);
  }
  private getItemsBySaleId(saleId: number): ItemSale[] {
    const itemSales = this.itemSaleRepository.filterBySaleId(saleId);
    return itemSales
      .filter((item) => item.saleId === saleId)
      .map((item) => ({
        ...item,
        book: this.getBookById(item.bookId),
      }));
  }

  findAll(page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedSales = sales.slice(startIndex, endIndex);

    const data = paginatedSales.map((sale) => ({
      ...sale,
      customer: this.getCustomerById(sale.customerId),
      itemsSale: this.getItemsBySaleId(sale.id),
    }));

    return {
      data,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(sales.length / limit),
        totalItems: sales.length,
      },
    };
  }

  findById(id: number): (Sale & { customer?: Customer }) | undefined {
    const sale = sales.find((sale) => sale.id === id);
    if (sale) {
      return {
        ...sale,
        customer: this.getCustomerById(sale.customerId),
        itemsSale: this.getItemsBySaleId(sale.id),
      };
    }
    return undefined;
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
