import React from 'react';
import { AppBar, Toolbar, Typography, Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartItemCount = useSelector((state) => state.cart.items.length);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1 }}>
          ABC Store
        </Typography>
        <IconButton component={Link} to="/cart" color="inherit">
          <Badge badgeContent={cartItemCount} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
