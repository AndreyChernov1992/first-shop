import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../store/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((accumulator,current) => accumulator + current.price, 0)

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
              onClick={() => dispatch(deleteFromCart(product.id))}
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
            <span className='cart-list-item-price'>{product.price.toFixed(2)}$</span>
          </li>
        ))}
        <span className='cart-list-total-price'>Total: {totalPrice.toFixed(2)}$</span>
      </ul>
    );
  };

  return <div>{list()}</div>;
}
