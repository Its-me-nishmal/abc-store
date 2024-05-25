import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productsSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchProducts(query));
  };

  return (
    <div>
      <TextField
        label="Search Products"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
