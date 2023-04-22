import { IPaginationProduct } from "@/interfaces/product.interface";
import Meta from "@/ui/Meta";
import CatalogPagination from "@/ui/catalog/CatalogPagination";
import Layout from "@/ui/layout/Layout";
import { FC } from "react";

const Home: FC<IPaginationProduct> = ({ products, length }) => {
  return (
    <Meta title="Home">
      <Layout>
        <CatalogPagination title="Fresh products" data={{ products, length }} />
      </Layout>
    </Meta>
  );
};

export default Home;
