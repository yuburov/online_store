import ProductDetails from "@/screens/product-details/ProductDetails"
import { ProductService } from "@/services/products/product.service";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { IProduct } from '../../interfaces/product.interface';
import { useCart } from "@/hooks/useCart";

const ProductDetailsPage: NextPage<{product: IProduct}> = ({ product }) => {
  return <ProductDetails product={product} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await ProductService.getAll();

  const paths = data.products.map((product) => {
    return {
      params: { slug: product.slug },
    };
  });
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { data: product } = await ProductService.getBySlug(
    params?.slug as string
  );
  
  return {
    props: {
      product
    },
  };
};

export default ProductDetailsPage