import { Box, Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { searchContainerStyles, searchTextFieldStyles } from "./styles";

interface SearchProps {
  value: string,
  setValue: (value: string) => void,
  onClick: () => void
}

const Search = ({ value, setValue, onClick }: SearchProps) => {
  return (
    <Box sx={searchContainerStyles}>
      <TextField
        sx={searchTextFieldStyles}
        InputProps={{
          style: { padding: 0, height: '40px' },
          startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
        }}
        onKeyDown={(e) => e.code === 'Enter' ? onClick() : null}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={onClick}>Search</Button>
    </Box>
  );
}

export default Search;