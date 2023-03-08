import { Product } from "@/types/Product";
import { TableBody, TableContainer, TableHead, Table, TableRow, TableCell } from "@mui/material";

interface TableProps {
  columns: { field: string, header: string }[];
  rows: Product[];
}

const TableComponent = ({ columns, rows }: TableProps) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column, index) => (
            <TableCell key={index}> {column.header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            {columns.map((column, index) => (
              <TableCell key={index}>{row[column.field as keyof Product]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default TableComponent;