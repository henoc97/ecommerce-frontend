export interface IUserActivity {
  id: number;
  action: string;
  keyword?: string;
  userId: number;
  productId?: number;
  orderId?: number;
  createdAt: Date;
  updatedAt: Date;
}

export default IUserActivity;
