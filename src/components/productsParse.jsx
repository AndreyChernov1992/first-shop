import { Link } from 'react-router-dom';
import { deleteProductsData } from '../services/productsApi';
import cls from './ProductsParse.module.scss'
import { observer } from 'mobx-react-lite';
import cartStore from '../store/cartStore';
import productsStore from '../store/productsStore';

const ProductsParse = observer(() => {
  const {addCartProduct} = cartStore;
  const {products, deleteProduct} = productsStore;

  const truncateTitle = (title, limit) => {
    if (title.length > limit) {
      return title.slice(0, limit) + '...';
    }
    return title;
  };

  const deleteItem = async (id) => {
    try {
      await deleteProductsData(id);
      deleteProduct(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ul className={cls.productList}>
      {products.map((product) => (
        <li
          className={cls.productListItem}
          key={product.id}
        >
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className={cls.productListLink}
          >
            <img
              alt='product'
              className={cls.productListItemImage}
              src={product.image}
            />
            <span className={cls.productListItemTitle} title={product.title}>
              {truncateTitle(product.title, 20)}  
            </span>
            <span className={cls.productListItemPrice}>
              {product.price.toFixed(2)}$
            </span>
          </Link>
          <div className={cls.productListItemWrapper}>
            <button
              className={cls.productListItemCart}
              onClick={() => addCartProduct(product)}
            >
              Add to Cart
            </button>
            <button
              onClick={() => deleteItem(product.id)}
              className={cls.productListItemDel}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
})

export default ProductsParse;
