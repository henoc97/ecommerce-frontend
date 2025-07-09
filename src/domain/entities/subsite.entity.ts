import IOrder from "./order.entity";

export interface ISubsite {
  id: number;
  title: string;
  config: any;
  createdAt: Date;
  shopId: number;

  order?: IOrder;
}

export default ISubsite;
