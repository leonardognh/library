import { Author } from "../models/author.model";

const authors: Author[] = [];

export class AuthorRepository {
  findAll(page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    return {
      data: authors.slice(startIndex, endIndex),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(authors.length / limit),
        totalItems: authors.length,
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
}
