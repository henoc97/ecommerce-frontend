import ICart from "./cart.entity";
import IProductVariant from "./productVariant.entity";

export interface ICartItem {
  id: number;
  quantity: number;
  cartId: number;
  productVariantId: number;

  productVariant?: IProductVariant;
  cart?: ICart;
}

export default ICartItem;
