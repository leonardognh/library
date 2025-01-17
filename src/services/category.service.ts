import { CategoryRepository } from "../repositories/category.repository";
import { Category } from "../models/category.model";

export class CategoryService {
  private repository = new CategoryRepository();

  getAll(page: number, limit: number) {
    return this.repository.findAll(page, limit);
  }

  getById(id: string): Category | undefined {
    return this.repository.findById(id);
  }

  create(category: Category): void {
    this.repository.create(category);
  }

  update(id: string, updated: Partial<Category>): Category | undefined {
    return this.repository.update(id, updated);
  }

  delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
