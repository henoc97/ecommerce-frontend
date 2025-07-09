import IShop from "./shop.entity";
import IUser from "./user.entity";

export interface IVendor {
  id: number;
  userId: number;

  user?: IUser;
  Shops: IShop[];
}

export default IVendor;
