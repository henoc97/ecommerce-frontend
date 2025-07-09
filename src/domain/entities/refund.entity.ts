import { RefundStatus } from "../enums/RefundStatus.enum";
import IOrder from "./order.entity";

export interface IRefund {
  id: number;
  orderId?: number;
  reason: string;
  amount: number;
  status: RefundStatus;
  createdAt: Date;

  order?: IOrder;
}

export default IRefund;
