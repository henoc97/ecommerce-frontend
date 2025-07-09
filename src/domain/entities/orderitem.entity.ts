import IProductVariant from "./productVariant.entity";

export interface IOrderItem {
  id: number;
  orderId: number;
  productVariantId: number;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;

  productVariant?: IProductVariant;
}

export default IOrderItem;
