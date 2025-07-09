import { UserActivityAction } from "../enums/UserActivityAction.enum";
import IUser from "./user.entity";

export interface IUserActivity {
  id: number;
  action: UserActivityAction;
  keyword?: string;
  userId: number;
  productId?: number;
  orderId?: number;
  createdAt: Date;
  updatedAt: Date;

  user?: IUser;
}

export default IUserActivity;
