import IProductVariant from "./productVariant.entity";
import IUser from "./user.entity";

export interface IReview {
  id: number;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  productVariantId: number;

  productVariant?: IProductVariant;
  user?: IUser;
}

export default IReview;
