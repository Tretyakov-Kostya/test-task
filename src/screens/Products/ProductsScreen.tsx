import Search from "@/components/Search";
import TableComponent from "@/components/Table";
import { Product } from "@/types/Product";
import { Box } from "@mui/material";
import { useState } from "react";
import { ProductScreenWrapperStyles } from "./styles";

export interface ProductsScreenProps {
  products: Product[]
}

const ProductsScreen = ({ products }: ProductsScreenProps) => {
  const [searchFieldValue, setSearchFieldValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const columns = [
    {field: 'name', header: 'Name'},
    {field: 'price', header: 'Price'},
    {field: 'description', header: 'Description'}
  ]

  const handleSearchButtonClick = () => {
    setFilteredProducts(
      !!searchFieldValue.length ?
        products.filter(product => product.name.toLowerCase().includes(searchFieldValue.toLowerCase())) :
        products)
  }

  return (
    <Box sx={ProductScreenWrapperStyles}>
      <Search value={searchFieldValue} setValue={setSearchFieldValue} onClick={handleSearchButtonClick} />

      <TableComponent
        columns={columns}
        rows={filteredProducts}
       />
    </Box>
  );
}

export default ProductsScreen;