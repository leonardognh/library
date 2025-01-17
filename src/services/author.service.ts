import { AuthorRepository } from "../repositories/author.repository";
import { Author } from "../models/author.model";

export class AuthorService {
  private repository = new AuthorRepository();

  getAll(page: number, limit: number) {
    return this.repository.findAll(page, limit);
  }

  getById(id: number): Author | undefined {
    return this.repository.findById(id);
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
