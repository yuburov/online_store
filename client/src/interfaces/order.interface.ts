import { ICartItem } from "./cart.interface";
import { IUser } from "./user.interface";

export enum EnumOrderStatus {
  PENDING = 'PENDING',
  PAYED = 'PAYED',
  SHIPED = 'SHIPED',
  DELIVERED = 'DELIVERED'
}

export interface IOrder {
  id: number,
  createdAt: string,
  items: ICartItem[],
  status: EnumOrderStatus
  user: IUser
  total: number
}