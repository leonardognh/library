import { Book } from "../models/book.model";
import { AuthorRepository } from "./author.repository";
import { CategoryRepository } from "./category.repository";

const books: Book[] = [];

export class BookRepository {
  private authorRepository = new AuthorRepository();
  private categoryRepository = new CategoryRepository();

  findAll(page: number, limit: number) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    return {
      data: books.slice(startIndex, endIndex),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(books.length / limit),
        totalItems: books.length,
      },
    };
  }

  findById(id: number): Book | undefined {
    return books.find((book) => book.id === id);
  }
  findBooksByAuthors(authorIds: number[], page: number, limit: number) {
    const booksByAuthors = books.filter((book) =>
      book.authors.some((authorId) => authorIds.includes(authorId))
    );

    const booksWithAuthors = booksByAuthors.map((book) => {
      const detailedAuthors = this.authorRepository.findByIds(book.authors);
      return { ...book, authors: detailedAuthors };
    });

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    return {
      data: booksWithAuthors.slice(startIndex, endIndex),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(booksWithAuthors.length / limit),
        totalItems: booksWithAuthors.length,
      },
    };
  }
  findBooksByCategories(categoryIds: number[], page: number, limit: number) {
    const booksByCategories = books.filter((book) =>
      book.categories.some((categoryId) => categoryIds.includes(categoryId))
    );

    const booksWithCategories = booksByCategories.map((book) => {
      const detailedCategories = this.categoryRepository.findByIds(
        book.categories
      );
      return { ...book, categories: detailedCategories };
    });

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    return {
      data: booksWithCategories.slice(startIndex, endIndex),
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(booksWithCategories.length / limit),
        totalItems: booksWithCategories.length,
      },
    };
  }
  create(book: Book): void {
    books.push(book);
  }

  update(id: number, updated: Partial<Book>): Book | undefined {
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
      books[index] = { ...books[index], ...updated };
      return books[index];
    }
    return undefined;
  }

  delete(id: number): boolean {
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
      books.splice(index, 1);
      return true;
    }
    return false;
  }
}
