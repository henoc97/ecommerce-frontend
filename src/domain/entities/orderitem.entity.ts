export interface IOrderItem {
  id: number;
  orderId: number;
  productVariantId: number;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export default IOrderItem;
