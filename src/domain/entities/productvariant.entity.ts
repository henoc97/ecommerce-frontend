export interface IProductVariant {
  id: number;
  productId: number;
  attributes: any;
  stock: number;
  price: number;
  currency: string;
}

export default IProductVariant;
