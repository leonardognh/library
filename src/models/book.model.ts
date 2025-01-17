import { Author } from "./author.model";
import { Category } from "./category.model";

export interface Book {
  id: number;
  title: string;
  price: number;
  stock: number;
  categories: number[];
  authors: number[];
  category?: Category[];
  author?: Author[];
}
