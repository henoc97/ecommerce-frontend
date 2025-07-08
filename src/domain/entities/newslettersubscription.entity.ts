export interface INewsletterSubscription {
  id: number;
  email: string;
  subscribedAt: Date;
  isActive: boolean;
  shopId: number;
}

export default INewsletterSubscription;
