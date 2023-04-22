import { instance } from '@/api/api.interceptor'
import { IOrder } from '@/interfaces/order.interface'

const ORDERS = 'orders'

export const OrderService = {
  async getAll() {
    return await instance<IOrder[]>({
      url: `${ORDERS}`,
      method: 'GET',
    })
  },
}

