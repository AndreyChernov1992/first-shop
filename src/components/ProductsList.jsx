import ProductsParse from './ProductsParse';
import ProductsForm from './ProductsForm';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { saveProduct } from '../store/slice/productSlice';
import { getProductsData } from '../services/productsApi';
import { useDispatch } from 'react-redux';
import cls from './ProductsForm.module.scss'

export default function ProductsList() {
  const dispatch = useDispatch();

  const loadData = async () => {
    try {
      const data = await getProductsData();
      dispatch(saveProduct(data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div className={cls.productListForm}>
        <ProductsForm />
        <Link to={`/cart/`}>
          <button className={cls.productListFormCart}>Cart</button>
        </Link>
      </div>
      <ProductsParse />
    </div>
  );
}
