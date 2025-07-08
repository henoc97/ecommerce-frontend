export interface IProduct {
  id: number;
  name: string;
  description?: string;
  productVariantKeys: string[];
  createdAt: Date;
  updatedAt: Date;
  categoryId: number;
  shopId: number;
}

export default IProduct;
