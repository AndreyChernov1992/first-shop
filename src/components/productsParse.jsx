import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../store/slice/cartSlice';
import { deleteProductsData } from '../services/productsApi';
import { deleteProduct } from '../store/slice/productSlice';
import cls from './ProductsParse.module.scss'

export default function ProductsParse() {
  const productsArray = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const deleteItem = async (id) => {
    try {
      await deleteProductsData(id);
      dispatch(deleteProduct(id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ul className={cls.productList}>
      {productsArray.map((product) => (
        <li
          className={cls.productListItem}
          key={product.id}
        >
          <Link
            to={`/product/${product.id}`}
            key={product.id}
          >
            <img
              alt='product'
              className={cls.productListItemImage}
              src={product.image}
            />
            <span className={cls.productListItemTitle}>{product.title}</span>
            <span className={cls.productListItemPrice}>
              {product.price.toFixed(2)}$
            </span>
          </Link>
          <button
            onClick={() => deleteItem(product.id)}
            className={cls.productListItemDel}
          >
            Delete
          </button>
          <button
            className={cls.productListItemCart}
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  );
}
