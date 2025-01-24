import { CategoryRepository } from "../repositories/category.repository";
import { Category } from "../models/category.model";

export class CategoryService {
  private repository: CategoryRepository;

  constructor(repository: CategoryRepository) {
    this.repository = repository;
  }

  getAll(page: number, limit: number, filter?: string) {
    return this.repository.findAll(page, limit, filter);
  }

  getById(id: number): Category | undefined {
    return this.repository.findById(id);
  }
  getByIds(ids: number[]): Category[] {
    return this.repository.findByIds(ids);
  }

  create(category: Category): void {
    this.repository.create(category);
  }

  update(id: number, updated: Partial<Category>): Category | undefined {
    return this.repository.update(id, updated);
  }

  delete(id: number): boolean {
    return this.repository.delete(id);
  }
}
