import { Product } from "@/types/Product";

export interface ProductsScreenProps {
  products: Product[]
}

const ProductsScreen = ({ products }: ProductsScreenProps) => {
  return (
    <table>
      <tbody>
        {
          products.map(product => (
            <tr key={product.id}>
              <td> {product.name}</td>
              <td> {product.price}</td>
              <td> {product.description}</td>      
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default ProductsScreen;