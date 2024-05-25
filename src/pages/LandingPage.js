import React from 'react';
import { Typography } from '@mui/material';
import ProductList from '../components/ProductList';

const LandingPage = () => {
  return (
    <div>
      <Typography variant="h2">Welcome to ABC Store</Typography>
      <Typography variant="h4">Newest Products</Typography>
      <ProductList />
    </div>
  );
};

export default LandingPage;
