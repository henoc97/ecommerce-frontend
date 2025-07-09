import ICart from "./cart.entity";
import ICategory from "./category.entity";
import INewsletterSubscription from "./newsletterSubscription.entity";
import IOrder from "./order.entity";
import IProduct from "./product.entity";
import IShopSubscription from "./shopSubscription.entity";
import ISubsite from "./subsite.entity";
import IVendor from "./vendor.entity";

export interface IShop {
  id: number;
  name: string;
  url?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  vendorId: number;
  subsiteId?: number;

  vendor?: IVendor;
  subsite?: ISubsite;
  shopSubscriptions?: IShopSubscription[];
  carts: ICart[];
  products: IProduct[];
  orders: IOrder[];
  categories: ICategory[];
  newsletterSubscriptions: INewsletterSubscription[]
}

export default IShop;
