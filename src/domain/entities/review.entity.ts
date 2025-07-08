export interface IReview {
  id: number;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  productVariantId: number;
}

export default IReview;
