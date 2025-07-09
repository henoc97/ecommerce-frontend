import { DiscountType } from "../enums/DiscountType.enum";
import IProductVariant from "./productVariant.entity";

export interface IPromotion {
  id: number;
  name: string;
  discountValue: number;
  discountType: DiscountType;
  startDate: Date;
  endDate: Date;
  productVariantId: number;
  createdAt: Date;
  updatedAt: Date;

  productVariant?: IProductVariant;
}

export default IPromotion;
