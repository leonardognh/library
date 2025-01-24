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

    let filteredBooks = books;
    if (filter) {
      filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(filter.toLowerCase())
      );
    }

    const paginated = filteredBooks.slice(startIndex, endIndex);

    const data = paginated.map((book) => ({
      ...book,
      category: this.getCategoriesByIds(book.categories),
      author: this.getAuthorsByIds(book.authors),
    }));

    return {
      data,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(books.length / limit),
        totalItems: books.length,
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
  findBooksByAuthors(authorIds: number[], page: number, limit: number) {
    const booksByAuthors = books.filter((book) =>
      book.authors.some((authorId) => authorIds.includes(authorId))
    );
    console.log(
      "🚀 ~ BookRepository ~ findBooksByAuthors ~ booksByAuthors:",
      booksByAuthors
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
