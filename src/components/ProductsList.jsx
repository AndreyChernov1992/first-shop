import ProductsForm from './productsForm';
import ProductsParse from './productsParse';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsStore from '../store/productsStore'
import cls from './ProductsForm.module.scss'
import { observer } from 'mobx-react-lite';

const ProductsList = observer(() => {
  const {getProducts} = productsStore;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className={cls.productListForm}>
        <ProductsForm />
        <h1 className={cls.header}>First Shop</h1>
        <Link to={`/cart/`}>
          <button className={cls.productListFormCart}>Cart</button>
        </Link>
      </div>
      <ProductsParse />
    </div>
  );
})

export default ProductsList