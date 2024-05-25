import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../redux/cartSlice';
import { Typography, Button, List, ListItem, ListItemText } from '@mui/material';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <div>
      <Typography variant="h4">Shopping Cart</Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.title}
              secondary={`$${item.price}`}
            />
            <Button variant="contained" color="secondary" onClick={() => removeItem(item.id)}>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
      <Typography variant="h5">
        Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
      </Typography>
    </div>
  );
};

export default ShoppingCart;
