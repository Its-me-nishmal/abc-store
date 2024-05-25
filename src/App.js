import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/products/:id" component={ProductDetailsPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/cart" component={ShoppingCartPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
