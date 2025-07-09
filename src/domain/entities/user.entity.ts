import { UserRole } from "../enums/UserRole.enum";
import IAddress from "./address.entity";
import IAuditLog from "./auditLog.entity";
import ICart from "./cart.entity";
import INotification from "./notification.entity";
import IOrder from "./order.entity";
import IReview from "./review.entity";
import ITicket from "./ticket.entity";
import IUserActivity from "./userActivity.entity";
import IVendor from "./vendor.entity";

export interface IUser {
  id: number;
  email: string;
  password?: string;
  name: string;
  phone?: string;
  isEmailVerified: boolean;
  authProvider: string;
  googleId?: string;
  lastLogin?: Date;
  role: UserRole;
  updatedAt: Date;
  createdAt: Date;

  address: IAddress[]
  orders: IOrder[]
  vendor?: IVendor[]
  carts: ICart[]
  reviews: IReview[]
  notifications: INotification[]
  tickets: ITicket[]
  userActivitis: IUserActivity[]
  auditLogs: IAuditLog[]
}

export default IUser;
