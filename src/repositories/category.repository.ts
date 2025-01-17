import { Category } from "../models/category.model";

const categories: Category[] = [];

export class CategoryRepository {
  findAll(page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    return {
      data: categories.slice(startIndex, endIndex),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(categories.length / limit),
        totalItems: categories.length,
      },
    };
  }

  findById(id: string): Category | undefined {
    return categories.find((category) => category.id === id);
  }
  findByIds(categoryIds: string[]) {
    return categories.filter((category) => categoryIds.includes(category.id));
  }

  create(category: Category): void {
    categories.push(category);
  }

  update(id: string, updated: Partial<Category>): Category | undefined {
    const index = categories.findIndex((category) => category.id === id);
    if (index !== -1) {
      categories[index] = { ...categories[index], ...updated };
      return categories[index];
    }
    return undefined;
  }

  delete(id: string): boolean {
    const index = categories.findIndex((category) => category.id === id);
    if (index !== -1) {
      categories.splice(index, 1);
      return true;
    }
    return false;
  }
}
