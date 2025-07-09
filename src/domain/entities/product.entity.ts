import ICategory from "./category.entity";
import IProductVariant from "./productVariant.entity";
import IShop from "./shop.entity";

export interface IProduct {
  id: number;
  name: string;
  description?: string;
  productVariantKeys: string[];
  createdAt: Date;
  updatedAt: Date;
  categoryId: number;
  shopId: number;

  category?: ICategory;
  shop?: IShop;
  productVariants: IProductVariant[];
}

export default IProduct;
