export interface IOrder {
  id: number;
  totalAmount: number;
  paymentId?: number;
  refundId?: number;
  trackingNumber?: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  shopId: number;
}

export default IOrder;
