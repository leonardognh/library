// src/dependencies.ts
import { AuthorRepository } from "./repositories/author.repository";
import { CategoryRepository } from "./repositories/category.repository";
import { BookRepository } from "./repositories/book.repository";
import { SaleRepository } from "./repositories/sale.repository";
import { ItemSaleRepository } from "./repositories/itemSale.repository";
import { CustomerRepository } from "./repositories/customer.repository";
import { AuthorService } from "./services/author.service";
import { CategoryService } from "./services/category.service";
import { BookService } from "./services/book.service";
import { SaleService } from "./services/sale.service";
import { CustomerService } from "./services/customer.service";
import { ItemSaleService } from "./services/itemSale.service";

// Repositories
const authorRepository = new AuthorRepository();
const categoryRepository = new CategoryRepository();
const bookRepository = new BookRepository(authorRepository, categoryRepository);
const customerRepository = new CustomerRepository();
const itemSaleRepository = new ItemSaleRepository(bookRepository);
const saleRepository = new SaleRepository(
  customerRepository,
  itemSaleRepository,
  bookRepository
);

// Services
const authorService = new AuthorService(authorRepository);
const categoryService = new CategoryService(categoryRepository);
const bookService = new BookService(bookRepository);
const customerService = new CustomerService(customerRepository);
const itemSaleService = new ItemSaleService(itemSaleRepository);
const saleService = new SaleService(saleRepository);

export const dependencies = {
  authorService,
  categoryService,
  bookService,
  customerService,
  saleService,
  itemSaleService,
};
