import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const addToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <div>
      <img src={product.image} alt={product.title} width="300" />
      <Typography variant="h4">{product.title}</Typography>
      <Typography variant="body1">{product.description}</Typography>
      <Typography variant="h6">${product.price}</Typography>
      <Button variant="contained" color="primary" onClick={addToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductDetails;
