import IProductVariant from "./productVariant.entity";

export interface IProductImage {
  id: number;
  productVariantId: number;
  url: string;

  productVariant?: IProductVariant;
}

export default IProductImage;
