import { observer } from 'mobx-react-lite';
import cartStore from '../../store/cartStore';

const Cart = observer(() => {
  const {cart, deleteCartProduct} = cartStore;
  const totalPrice = cart.reduce(
    (accumulator, current) => accumulator + current.price,
    0,
  );

  const list = () => {
    return (
      <ul className='cart-list'>
        <span className='cart-list-title'>Shopping Cart</span>
        {cart.map((product) => (
          <li
            className='cart-list-item'
            key={product.id}
          >
            <button
              onClick={() => deleteCartProduct(product.id)}
              className='cart-list-item-delete'
            >
              X
            </button>
            <img
              alt='product'
              className='cart-list-item-image'
              src={product.image}
            />
            <span className='cart-list-item-title'>{product.title}</span>
            <span className='cart-list-item-price'>
              {product.price.toFixed(2)}$
            </span>
          </li>
        ))}
        <span className='cart-list-total-price'>
          Total: {totalPrice.toFixed(2)}$
        </span>
      </ul>
    );
  };

  return <div>{list()}</div>;
})

export default Cart;
