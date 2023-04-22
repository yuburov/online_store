import { IPaginationProduct, IProduct } from "@/interfaces/product.interface";
import { FC, useState } from "react";
import ProductItem from "./product-item/ProductItem";
import Heading from "../Heading";
import SortDropDown from "./SortDropDown";
import Button from "../button/Button";
import { EnumProductSort } from "@/services/products/product.interface";
import { useQuery } from "@tanstack/react-query";
import { ProductService } from "@/services/products/product.service";
import Loader from "../Loader";

interface ICatalog {
  data: IPaginationProduct;
  title?: string;
}

const CatalogPagination: FC<ICatalog> = ({ data, title }) => {
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState<EnumProductSort>(
    EnumProductSort.NEWEST
  );

  const { data: res, isLoading } = useQuery({
    queryKey: ["product", sortType, page],
    queryFn: () =>
      ProductService.getAll({
        page,
        perPage: 4,
        sort: sortType,
      }),
    initialData: data,
  });
  if (isLoading) return <Loader />;
  return (
    <section>
      {title && <Heading className="mb-5">{title}</Heading>}
      <SortDropDown sortType={sortType} setSortType={setSortType} />
      {res?.products.length ? (
        <>
          <div className="grid grid-cols-4 gap-10">
            {res.products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-16">
            {Array.from({ length: res.length / 4 }).map((_, index) => {
              const pageNumber = index + 1;
              return (
                <Button
                  key={pageNumber}
                  size="sm"
                  variant={page === pageNumber ? "orange" : "white"}
                  onClick={() => setPage(pageNumber)}
                  className="mx-3"
                >
                  {pageNumber}
                </Button>
              );
            })}
          </div>
        </>
      ) : (
        <div>There are not products</div>
      )}
    </section>
  );
};

export default CatalogPagination;
