import { Customer } from "./customer.model";
import { ItemSale } from "./itemSale.model";

export interface Sale {
  id: number;
  customerId: number;
  date: string;
  total: number;
  itemsSale?: ItemSale[];
  customer?: Customer;
}
