import IProduct from "./product.entity";
import IShop from "./shop.entity";

export interface ICategory {
  id: number;
  name: string;
  parentId?: number;
  shopId?: number;

  parent?: ICategory;
  shop?: IShop;
  children: ICategory[];
  products: IProduct[];
}

export default ICategory;
