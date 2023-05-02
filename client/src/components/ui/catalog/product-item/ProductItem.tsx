import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import { FC } from "react";
import AddToCartButton from "./AddToCartButton";
import ProductRating from "./ProductRating";
import dynamic from "next/dynamic";
import Link from "next/link";
import { convertPrice } from "@/utils/convertPrice";

const DynamicFavoriteButton = dynamic(() => import("./FavoriteButton"));

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className="animate-scaleIn flex flex-col justify-between">
      <div className="bg-white rounded-xl relative overflow-hidden">
        <div className="absolute top-2 right-3 z-10">
          <DynamicFavoriteButton productId={product.id} />
          <AddToCartButton product={product} />
        </div>
        <Link href={`/product/${product.slug}`}>
          <Image
            width={250}
            height={250}
            src={product.images[0]}
            alt={product.name}
          />
        </Link>
      </div>
      <div>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-2 font-semibold">{product.name}</h3>
        </Link>
        <Link
          href={`/category/${product.category.slug}`}
          className="text-aqua text-xs mb-2"
        >
          {product.category.name}
        </Link>
        <ProductRating product={product} />
        <div className="text-xl font-semibold">
          {convertPrice(product.price)}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
