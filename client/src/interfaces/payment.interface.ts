import { EnumOrderStatus } from "./order.interface"

interface Amount {
  value: string
  currency: string
}

interface Recipient {
  account_id: string
  gateway_id: string
}

interface PaymentMethod {
  type: string
  id: string
  saved: boolean
}

interface Confirmation {
  type: string
  return_url: string
  confirmation_url: string
}

export interface IPaymentResponse {
  id: string
  status: EnumOrderStatus
  amount: Amount
  resipient: Recipient
  payment_method: PaymentMethod
  created_at: Date
  confirmation: Confirmation
}