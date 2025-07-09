import IShop from "./shop.entity";

export interface INewsletterSubscription {
  id: number;
  email: string;
  subscribedAt: Date;
  isActive: boolean;
  shopId: number;

  shop?: IShop;
}

export default INewsletterSubscription;
