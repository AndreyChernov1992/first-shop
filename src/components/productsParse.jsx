import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../store/cartSlice';
import { useDeleteItem } from '../store/hooks/hooks';
// import useHooks from '../store/hooks/hooks';

export default function ProductsParse() {
  const productsArray = useSelector((state) => state.products);

  const dispatch = useDispatch();
  // const { deleteItem } = useHooks();

  // console.log(deleteItem);

  // const deleteItem = async (id) => {
  //   try {
  //     deleteProductsData(id);
  //     dispatch(deleteProduct(id));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const list = () => {
    return (
      <ul className='product-list'>
        {productsArray.map((product) => (
          <li
            className='product-list-item'
            key={product.id}
          >
            <Link
              to={`/product/${product.id}`}
              key={product.id}
            >
              <img
                alt='product'
                className='product-list-item-image'
                src={product.image}
              />
              <span className='product-list-item-title'>{product.title}</span>
              <span className='product-list-item-price'>
                {product.price.toFixed(2)}$
              </span>
            </Link>
            <button
              onClick={() => useDeleteItem(product.id)}
              className='product-list-item-delete'
            >
              Delete
            </button>
            <button
              className='product-list-item-cart'
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return list();
}
