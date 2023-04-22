import { IProduct } from "@/interfaces/product.interface";
import { FC } from "react";
import Loader from "../Loader";
import ProductItem from "./product-item/ProductItem";
import Heading from "../Heading";

interface ICatalog {
  products: IProduct[];
  isLoading?: boolean;
  title?: string;
}

const Catalog: FC<ICatalog> = ({ products, title }) => {
  return (
    <section>
      {title && <Heading className="mb-5">{title}</Heading>}
      {products.length ? (
        <div className="grid grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>There are not products</div>
      )}
    </section>
  );
};

export default Catalog;
