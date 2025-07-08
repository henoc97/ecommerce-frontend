export interface IShop {
  id: number;
  name: string;
  url?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  vendorId: number;
  subsiteId?: number;
}

export default IShop;
