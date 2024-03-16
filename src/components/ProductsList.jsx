import ProductsParse from './ProductsParse';
import ProductsForm from './ProductsForm';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { saveProduct } from '../store/productSlice';
import { getProductsData } from '../services/productsApi';
import { useDispatch } from 'react-redux';


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
      <div className='product-list-form'>
        <ProductsForm />
        <Link to={`/cart/`}>
          <button className='product-list-form-cart'>Cart</button>
        </Link>
      </div>
      <ProductsParse />
    </div>
  );
}
