import { IPaginationProduct, IProduct, TypeProducts } from "@/interfaces/product.interface";
import Home from "@/screens/home/Home";
import { ProductService } from "@/services/products/product.service";
import { GetStaticProps, NextPage } from "next";

const HomePage: NextPage<IPaginationProduct> = ({ products, length}) => {
  return <Home products={products} length={length} />;
};

export const getStaticProps: GetStaticProps<IPaginationProduct> = async () => {
  const data = await ProductService.getAll({
    page: 1,
    perPage: 4,
  });

  return {
    props: data
  };
};

export default HomePage;
