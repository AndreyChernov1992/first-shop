import ProductsParse from './ProductsParse';
import ProductsForm from './ProductsForm';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSaveData } from '../store/hooks/hooks';

export default function ProductsList() {
  // const data = () => useSaveData()
  // const { saveData } = useHooks();
  // console.log(saveData());
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
    useSaveData();
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
