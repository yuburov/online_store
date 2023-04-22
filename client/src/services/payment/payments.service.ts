import { instance } from '@/api/api.interceptor'

import { ICartItem } from '@/interfaces/cart.interface'
import { EnumOrderStatus, IOrder } from '@/interfaces/order.interface'
import { IPaymentResponse } from '@/interfaces/payment.interface'

const PAYMENT = 'orders'

type TypeData = {
	status?: EnumOrderStatus
	items: {
		quantity: number
		price: number
		productId: number
	}[]
}

export const PaymentService = {
	async createPaymont(data: TypeData) {
		return await instance.post<IPaymentResponse>(PAYMENT, data)
	}
}
