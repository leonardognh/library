// src/services/book.service.ts
import { BookRepository } from "../repositories/book.repository";
import { Book } from "../models/book.model";

export class BookService {
  private repository: BookRepository;

  constructor(repository: BookRepository) {
    this.repository = repository;
  }

  getAll(page: number, limit: number, filter?: string) {
    return this.repository.findAll(page, limit, filter);
  }

  getAllByAuthors(authorIds: number[], page: number, limit: number) {
    return this.repository.findBooksByAuthors(authorIds, page, limit);
  }

  getAllByCategories(categoryIds: number[], page: number, limit: number) {
    return this.repository.findBooksByCategories(categoryIds, page, limit);
  }

  getById(id: number): Book | undefined {
    return this.repository.findById(id);
  }

  create(book: Book): void {
    this.repository.create(book);
  }

  update(id: number, updated: Partial<Book>): Book | undefined {
    return this.repository.update(id, updated);
  }

  delete(id: number): boolean {
    return this.repository.delete(id);
  }
}
