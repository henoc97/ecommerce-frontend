import { OrderStatus } from "../enums/OrderStatus.enum";
import IOrderItem from "./orderItem.entity";
import IPayment from "./payment.entity";
import IRefund from "./refund.entity";
import IShop from "./shop.entity";
import IUser from "./user.entity";

export interface IOrder {
  id: number;
  totalAmount: number;
  paymentId?: number;
  refundId?: number;
  trackingNumber?: string;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  shopId: number;

  user?: IUser;
  shop?: IShop;
  items: IOrderItem[];
  payment?: IPayment;
  refund?: IRefund;
}

export default IOrder;
