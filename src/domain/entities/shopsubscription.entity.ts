export interface IShopSubscription {
  id: number;
  shopId: number;
  subscriptionId: number;
  startDate: Date;
  endDate?: Date;
  isActive: boolean;
}

export default IShopSubscription;
