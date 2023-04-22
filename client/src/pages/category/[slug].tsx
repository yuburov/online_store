import { ICategory } from "@/interfaces/category.interface";
import { IProduct } from "@/interfaces/product.interface";
import Meta from "@/ui/Meta";
import Catalog from "@/ui/catalog/Catalog";
import Layout from "@/ui/layout/Layout";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { CategoryService } from "@/services/categories/category.service";
import { ProductService } from "@/services/products/product.service";

const CategoryPage: NextPage<{ products: IProduct[]; category: ICategory }> = ({
  products,
  category,
}) => {
  return (
    <Meta title={category.name}>
      <Layout>
        <Catalog products={products || []} title={category.name} />
      </Layout>
    </Meta>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await CategoryService.getAll();

  const paths = categories.data.map((category) => {
    return {
      params: { slug: category.slug },
    };
  });
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: products } = await ProductService.getByCategory(
    params?.slug as string
  );

  const { data: category } = await CategoryService.getBySlug(
    params?.slug as string
  );

  return {
    props: {
      products,
      category,
    },
  };
};

export default CategoryPage;
