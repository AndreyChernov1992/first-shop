import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProductPage() {
  const { id } = useParams();
  const productsArray = useSelector((state) => state.products);
  const chosenProduct = productsArray.find((product) => product.id == id);

  return (
    <ul className='product-page'>
      <img className='product-page-image' alt='product' src={chosenProduct.image}/>
      <li className='product-page-title'>{chosenProduct.title}</li>
      <li className='product-page-description'>{chosenProduct.description}</li>
      <li className='product-page-price'>{chosenProduct.price}$</li>
    </ul>
  );
}
