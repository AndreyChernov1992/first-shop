import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../store/productSlice';
import { deleteProductsData } from '../services/products';

export default function List() {
    
  const productsArray = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const deleteItem = async (id) => {
    try {
      deleteProductsData(id);
    } catch (err) {
      console.log(err);
    }
    dispatch(deleteProduct(id));
  };

  return productsArray.map((product) => (
    <li
      className='product-list-item'
      key={product.id}
    >
      <img
        alt='product'
        className='product-list-item__image'
        src={product.image}
      />
      <span className='product-list-item__title'>{product.title}</span>
      <span className='product-list-item__price'>{product.price}$</span>
      <button
        onClick={() => deleteItem(product.id)}
        className='product-list-item__btn'
      >
        Delete
      </button>
    </li>
  ));
}
