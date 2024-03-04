import { Routes, Route } from 'react-router-dom';
import ProductsList from '../components/ProductsList';
import ProductPage from '../components/ProductPage';
import Cart from '../components/cart/Cart';

function Routing() {
  return (
    <Routes>
      <Route
        path='/'
        element={<ProductsList />}
      />
      <Route
        path='/cart'
        element={<Cart />}
      />
      <Route
        path='/product/:id'
        element={<ProductPage />}
      />
    </Routes>
  );
}

export default Routing;
