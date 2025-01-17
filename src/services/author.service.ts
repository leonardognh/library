import { AuthorRepository } from "../repositories/author.repository";
import { Author } from "../models/author.model";

export class AuthorService {
  private repository = new AuthorRepository();

  getAll(page: number, limit: number) {
    return this.repository.findAll(page, limit);
  }

  getById(id: string): Author | undefined {
    return this.repository.findById(id);
  }

  create(author: Author): void {
    this.repository.create(author);
  }

  update(id: string, updated: Partial<Author>): Author | undefined {
    return this.repository.update(id, updated);
  }

  delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
