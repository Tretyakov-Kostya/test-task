import { products } from "./mocks"

interface ProductItem {
  name: string,
  price: number,
  description: string
}

export const getAllProducts = () => {
  return products.items.map((item: ProductItem, index: number) => {
    return {
      ...item,
      id: index + 1
    }
  });
}