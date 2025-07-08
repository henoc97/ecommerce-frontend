export interface IRefund {
  id: number;
  orderId?: number;
  reason: string;
  amount: number;
  status: string;
  createdAt: Date;
}

export default IRefund;
