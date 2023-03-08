import ProductsScreen, { ProductsScreenProps } from "@/screens/Products/ProductsScreen";
import { GetStaticProps } from "next";
import { getAllProducts } from "../api/products";

const ProductsPage = ({ products }: ProductsScreenProps) => (
  <ProductsScreen products={products} />
)

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts();
  return {
    props: {
      products
    }
  }
}

export default ProductsPage;