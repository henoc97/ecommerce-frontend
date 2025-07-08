export interface ISubscription {
  id: number;
  name: string;
  description?: string;
  price: number;
  currency: string;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}

export default ISubscription;
