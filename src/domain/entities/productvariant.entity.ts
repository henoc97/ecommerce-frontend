import { Currency } from "../enums/Currency.enum";
import ICartItem from "./cartItem.entity";
import IOrderItem from "./orderItem.entity";
import IProduct from "./product.entity";
import IProductImage from "./productImage.entity";
import IPromotion from "./promotion.entity";
import IReview from "./review.entity";

export interface IProductVariant {
  id: number;
  productId: number;
  attributes: any;
  stock: number;
  price: number;
  currency: Currency;

  product?: IProduct;
  productImages: IProductImage[];
  promotions: IPromotion[];
  cartItems: ICartItem[];
  orderItems: IOrderItem[];
  reviews: IReview[];
}

export default IProductVariant;
