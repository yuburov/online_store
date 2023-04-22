import { useCart } from "@/hooks/useCart";
import { useOutside } from "@/hooks/useOutside";
import { useRouter } from "next/router";
import { FC } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import cn from "clsx";
import SquareButton from "@/ui/button/SquareButton";
import { convertPrice } from "@/utils/convertPrice";
import Button from "@/ui/button/Button";
import CartItem from "./cart-item/CartItem";
import { useMutation } from "@tanstack/react-query";
import { PaymentService } from "@/services/payment/payments.service";
import { useActions } from "@/hooks/useActions";

const Cart: FC = () => {
  const { isShow, setIsShow, ref } = useOutside(false);
  const { items, total } = useCart();
  const { push } = useRouter();
  const { reset } = useActions()

  const { mutate } = useMutation(
    ["create payment"],
    () =>
      PaymentService.createPaymont({
        items: items.map((item) => ({
          price: item.price,
          quantity: item.quantity,
          productId: item.product.id,
        }))
    }),
    {
      onSuccess({ data }) {
        push(data.confirmation.confirmation_url).then(
          () => reset()
        )
      },
    }
  );

  return (
    <div className="relative" ref={ref}>
      <SquareButton
        rounded
        Icon={RiShoppingCartLine}
        onClick={() => {
          setIsShow(!isShow);
        }}
        number={items.length}
      />
      <div
        className={cn(
          "absolute top-16 w-80 -right-12 bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white",
          isShow ? "open-menu" : "close-menu"
        )}
      >
        <div className="font-normal text-lg">My cart</div>
        <div className="mt-10 mb-12">
          {items.length ? (
            items.map((item) => <CartItem item={item} key={item.id} />)
          ) : (
            <div className="font-light">Cart is empty</div>
          )}
        </div>

        <div>
          <div>Total:</div>
          <div className="font-bold">{convertPrice(total)}</div>
        </div>
        <div className="text-center">
          <Button onClick={() => mutate()} variant="white" size="sm" className="btn-link mt-5 mb-2">
            Place order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
