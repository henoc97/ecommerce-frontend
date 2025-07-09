import IShop from "./shop.entity";
import ISubscription from "./subscription.entity";

export interface IShopSubscription {
  id: number;
  shopId: number;
  subscriptionId: number;
  startDate: Date;
  endDate?: Date;
  isActive: boolean;
  subscription?: ISubscription;
  shop?: IShop;
}

export default IShopSubscription;
