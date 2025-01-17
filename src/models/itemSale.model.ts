import { Book } from "./book.model";
import { Sale } from "./sale.model";

export interface ItemSale {
  id: number;
  saleId: number;
  bookId: number;
  quantity: number;
  price: number;
  book?: Book;
  sale?: Sale;
}
