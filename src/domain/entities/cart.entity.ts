import ICartItem from "./cartItem.entity";
import IShop from "./shop.entity";
import IUser from "./user.entity";

export interface ICart {
  id: number;
  userId: number;
  shopId: number;
  totalPrice: number;
  totalQuantity: number;

  items: ICartItem[];
  user?: IUser;
  shop?: IShop;
}

export default ICart;
