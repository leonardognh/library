import { Categories } from "../database/categories.db";
import { Category } from "../models/category.model";

const categories: Category[] = Categories;

export class CategoryRepository {
  findAll(page: number, limit: number, filter?: string) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let filtered = categories;
    if (filter) {
      filtered = categories.filter((category) =>
        category.description.toLowerCase().includes(filter.toLowerCase())
      );
    }

    return {
      data: filtered.slice(startIndex, endIndex),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(filtered.length / limit),
        totalItems: filtered.length,
      },
    };
  }

  findById(id: number): Category | undefined {
    return categories.find((category) => category.id === id);
  }
  findByIds(categoryIds: number[]) {
    return categories.filter((category) => categoryIds.includes(category.id));
  }
  create(category: Category): void {
    category.id = this.generateNewId();
    categories.push(category);
  }

  update(id: number, updated: Partial<Category>): Category | undefined {
    const index = categories.findIndex((category) => category.id === id);
    if (index !== -1) {
      categories[index] = { ...categories[index], ...updated };
      return categories[index];
    }
    return undefined;
  }

  delete(id: number): boolean {
    const index = categories.findIndex((category) => category.id === id);
    if (index !== -1) {
      categories.splice(index, 1);
      return true;
    }
    return false;
  }
  private generateNewId() {
    const maxId =
      categories.length > 0
        ? Math.max(...categories.map((category) => category.id))
        : 0;

    return maxId + 1;
  }
}
