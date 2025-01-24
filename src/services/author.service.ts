import { AuthorRepository } from "../repositories/author.repository";
import { Author } from "../models/author.model";

export class AuthorService {
  private repository: AuthorRepository;

  constructor(repository: AuthorRepository) {
    this.repository = repository;
  }

  getAll(page: number, limit: number, filter?: string) {
    return this.repository.findAll(page, limit, filter);
  }

  getById(id: number): Author | undefined {
    return this.repository.findById(id);
  }
  getByIds(ids: number[]): Author[] {
    return this.repository.findByIds(ids);
  }

  create(author: Author): void {
    this.repository.create(author);
  }

  update(id: number, updated: Partial<Author>): Author | undefined {
    return this.repository.update(id, updated);
  }

  delete(id: number): boolean {
    return this.repository.delete(id);
  }
}
