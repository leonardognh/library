import { Book } from "../models/book.model";

export const Books: Book[] = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    price: 29.99,
    stock: 50,
    categories: [3, 10], // Fantasy, Children's Books
    authors: [1], // J.K. Rowling
  },
  {
    id: 2,
    title: "A Game of Thrones",
    price: 39.99,
    stock: 30,
    categories: [3, 4], // Fantasy, Science Fiction
    authors: [2], // George R.R. Martin
  },
  {
    id: 3,
    title: "The Lord of the Rings",
    price: 49.99,
    stock: 20,
    categories: [3], // Fantasy
    authors: [3], // J.R.R. Tolkien
  },
  {
    id: 4,
    title: "Murder on the Orient Express",
    price: 19.99,
    stock: 40,
    categories: [7], // Mystery
    authors: [4], // Agatha Christie
  },
  {
    id: 5,
    title: "The Shining",
    price: 25.99,
    stock: 25,
    categories: [14, 15], // Horror, Thriller
    authors: [5], // Stephen King
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    price: 15.99,
    stock: 60,
    categories: [8], // Romance
    authors: [6], // Jane Austen
  },
  {
    id: 7,
    title: "Adventures of Huckleberry Finn",
    price: 18.99,
    stock: 35,
    categories: [1], // Fiction
    authors: [7], // Mark Twain
  },
  {
    id: 8,
    title: "The Old Man and the Sea",
    price: 14.99,
    stock: 45,
    categories: [1], // Fiction
    authors: [8], // Ernest Hemingway
  },
  {
    id: 9,
    title: "Foundation",
    price: 32.99,
    stock: 20,
    categories: [4], // Science Fiction
    authors: [9], // Isaac Asimov
  },
  {
    id: 10,
    title: "Frankenstein",
    price: 22.99,
    stock: 25,
    categories: [14], // Horror
    authors: [10], // Mary Shelley
  },
  {
    id: 11,
    title: "A Tale of Two Cities",
    price: 20.99,
    stock: 40,
    categories: [2, 6], // Non-Fiction, History
    authors: [11], // Charles Dickens
  },
  {
    id: 12,
    title: "Norwegian Wood",
    price: 24.99,
    stock: 30,
    categories: [8], // Romance
    authors: [12], // Haruki Murakami
  },
  {
    id: 13,
    title: "One Hundred Years of Solitude",
    price: 27.99,
    stock: 35,
    categories: [1, 6], // Fiction, History
    authors: [13], // Gabriel García Márquez
  },
  {
    id: 14,
    title: "War and Peace",
    price: 34.99,
    stock: 15,
    categories: [6], // History
    authors: [14], // Leo Tolstoy
  },
  {
    id: 15,
    title: "The Adventures of Sherlock Holmes",
    price: 21.99,
    stock: 50,
    categories: [7], // Mystery
    authors: [15], // Arthur Conan Doyle
  },
];
