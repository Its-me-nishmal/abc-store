import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.title}
        height="140"
        image={product.image}
      />
      <CardContent>
        <Typography variant="h5" component={Link} to={`/products/${product.id}`}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={addToCart}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
