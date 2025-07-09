import { PaymentStatus } from "../enums/PaymentStatus.enum";
import IOrder from "./order.entity";

export interface IPayment {
  id: number;
  status: PaymentStatus;
  method: string;
  amount: number;
  providerId?: string;
  metadata?: any;
  currency: string;
  createdAt: Date;
  orderId?: number;

  order?: IOrder;
}

export default IPayment;
