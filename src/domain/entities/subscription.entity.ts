import { Currency } from "../enums/Currency.enum";
import IShopSubscription from "./shopSubscription.entity";

export interface ISubscription {
  id: number;
  name: string;
  description?: string;
  price: number;
  currency: Currency;
  duration: number;
  createdAt: Date;
  updatedAt: Date;

  shopSubscriptions?: IShopSubscription[];
}

export default ISubscription;
