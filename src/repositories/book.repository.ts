import { Category } from "../models/category.model";
import { Books } from "../database/books.db";
import { Book } from "../models/book.model";
import { Author } from "../models/author.model";
import { AuthorRepository } from "../repositories/author.repository";
import { CategoryRepository } from "../repositories/category.repository";

const books: Book[] = Books;

export class BookRepository {
  private authorRepository: AuthorRepository;
  private categoryRepository: CategoryRepository;

  constructor(
    authorRepository: AuthorRepository,
    categoryRepository: CategoryRepository
  ) {
    this.authorRepository = authorRepository;
    this.categoryRepository = categoryRepository;
  }
  private getAuthorsByIds(authorIds: number[]): Author[] {
    return this.authorRepository.findByIds(authorIds);
  }
  private getCategoriesByIds(categoryIds: number[]): Category[] {
    return this.categoryRepository.findByIds(categoryIds);
  }

  findAll(page: number, limit: number, filter?: string) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let filtered = books;
    if (filter) {
      filtered = books.filter((book) =>
        book.title.toLowerCase().includes(filter.toLowerCase())
      );
    }

    const paginated = filtered.slice(startIndex, endIndex);

    const data = paginated.map((book) => ({
      ...book,
      category: this.getCategoriesByIds(book.categories),
      author: this.getAuthorsByIds(book.authors),
    }));

    return {
      data,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(filtered.length / limit),
        totalItems: filtered.length,
      },
    };
  }

  findById(id: number): Book | undefined {
    const book = books.find((book) => book.id === id);
    if (book) {
      return {
        ...book,
        category: this.getCategoriesByIds(book.categories),
        author: this.getAuthorsByIds(book.authors),
      };
    }
    return undefined;
  }
  findBooksByAuthors(
    authorIds: number[],
    page: number,
    limit: number,
    filter?: string
  ) {
    const booksByAuthors = books.filter((book) =>
      book.authors.some((authorId) => authorIds.includes(authorId))
    );
    const booksWithAuthors = booksByAuthors.map((book) => {
      const detailedAuthors = this.authorRepository.findByIds(book.authors);
      return { ...book, authors: detailedAuthors };
    });

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let filtered = booksWithAuthors;
    if (filter) {
      filtered = booksWithAuthors.filter((book) =>
        book.title.toLowerCase().includes(filter.toLowerCase())
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
  findBooksByCategories(
    categoryIds: number[],
    page: number,
    limit: number,
    filter?: string
  ) {
    if (!categoryIds || categoryIds.length === 0) {
      return {
        data: [],
        pagination: { currentPage: page, totalPages: 0, totalItems: 0 },
      };
    }

    const booksByCategories = books.filter((book) =>
      book.categories.some((categoryId) => categoryIds.includes(categoryId))
    );

    const booksWithCategories = booksByCategories.map((book) => ({
      ...book,
      categories: this.categoryRepository.findByIds(book.categories) || [],
    }));

    let filteredBooks = booksWithCategories;
    if (filter) {
      const lowerFilter = filter.toLowerCase().trim();
      filteredBooks = booksWithCategories.filter((book) =>
        book.title.toLowerCase().includes(lowerFilter)
      );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

    return {
      data: paginatedBooks,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(filteredBooks.length / limit),
        totalItems: filteredBooks.length,
      },
    };
  }
  create(book: Book): void {
    book.id = this.generateNewId();
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
  private generateNewId() {
    const maxId =
      books.length > 0 ? Math.max(...books.map((book) => book.id)) : 0;

    return maxId + 1;
  }
}
