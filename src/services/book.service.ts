// src/services/book.service.ts
import { BookRepository } from "../repositories/book.repository";
import { Book } from "../models/book.model";

export class BookService {
  private repository = new BookRepository();

  getAll(page: number, limit: number) {
    return this.repository.findAll(page, limit);
  }

  getAllByAuthors(authorIds: string[], page: number, limit: number) {
    return this.repository.findBooksByAuthors(authorIds, page, limit);
  }

  getAllByCategories(categoryIds: string[], page: number, limit: number) {
    return this.repository.findBooksByCategories(categoryIds, page, limit);
  }

  getById(id: string): Book | undefined {
    return this.repository.findById(id);
  }

  create(book: Book): void {
    this.repository.create(book);
  }

  update(id: string, updated: Partial<Book>): Book | undefined {
    return this.repository.update(id, updated);
  }

  delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
