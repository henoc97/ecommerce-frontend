export interface IPromotion {
  id: number;
  name: string;
  discountValue: number;
  discountType: string;
  startDate: Date;
  endDate: Date;
  productVariantId: number;
  createdAt: Date;
  updatedAt: Date;
}

export default IPromotion;
