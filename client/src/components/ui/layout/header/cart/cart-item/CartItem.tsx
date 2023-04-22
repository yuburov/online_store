import { ICartItem } from "@/interfaces/cart.interface"
import { FC } from "react"
import Image from 'next/image';
import { convertPrice } from "@/utils/convertPrice";
import CartActions from "./cart-actions/CartActions";
import styles from '../Cart.module.scss'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
  return (
    <div className='flex mb-8'>
      <Image
        src={item.product.images[0]}
        width={100}
        height={100}
        alt={item.product.name}
      />
      <div className="ml-4 w-[170px]">
        <div className='truncate block'>{item.product.name}</div>
        <div>{convertPrice(item.product.price)}</div>
        <CartActions item={item} />
      </div>
    </div>
  )
}

export default CartItem