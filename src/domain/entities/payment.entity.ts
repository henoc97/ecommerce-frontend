export interface IPayment {
  id: number;
  status: string;
  method: string;
  amount: number;
  providerId?: string;
  metadata?: any;
  currency: string;
  createdAt: Date;
  orderId?: number;
}

export default IPayment;
