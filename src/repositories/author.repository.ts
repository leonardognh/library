import { Authors } from "../database/authors.db";
import { Author } from "../models/author.model";

const authors: Author[] = Authors;

export class AuthorRepository {
  findAll(page: number, limit: number, filter?: string) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let filtered = authors;
    if (filter) {
      filtered = authors.filter((author) =>
        author.name.toLowerCase().includes(filter.toLowerCase())
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

  findById(id: number): Author | undefined {
    return authors.find((author) => author.id === id);
  }
  findByIds(authorIds: number[]) {
    return authors.filter((author) => authorIds.includes(author.id));
  }

  create(author: Author): void {
    author.id = this.generateNewId();
    authors.push(author);
  }

  update(id: number, updated: Partial<Author>): Author | undefined {
    const index = authors.findIndex((author) => author.id === id);
    if (index !== -1) {
      authors[index] = { ...authors[index], ...updated };
      return authors[index];
    }
    return undefined;
  }

  delete(id: number): boolean {
    const index = authors.findIndex((author) => author.id === id);
    if (index !== -1) {
      authors.splice(index, 1);
      return true;
    }
    return false;
  }
  private generateNewId() {
    const maxId =
      authors.length > 0 ? Math.max(...authors.map((author) => author.id)) : 0;

    return maxId + 1;
  }
}
