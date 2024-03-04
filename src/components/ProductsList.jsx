import ProductsParse from './ProductsParse';
import ProductsForm from './ProductsForm';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { saveData } from '../store/hooks/hooks';

export default function ProductsList() {
  // const dispatch = useDispatch();

  // const loadData = async () => {
  //   try {
  //     const data = await getProductsData();

  //     dispatch(saveProduct(data));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    saveData();
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
