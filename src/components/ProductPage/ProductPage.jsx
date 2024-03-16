import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSingleProductData } from '../../services/productsApi';
import { useEffect } from 'react';

export default function ProductPage() {
  const { id } = useParams();
  const productsArray = useSelector((state) => state.products);
  let product = productsArray.find((product) => product.id == id);
  const data = async () => await getSingleProductData(id)

  useEffect(() => {
    if (!product) {
      product = data()
      console.log(data)
      if (!data) {
        return <div>No Product</div>
      }  
    }
  },[id])

  return (
    <ul className='product-page'>
      <img
        className='product-page-image'
        alt='product'
        src={product.image}
      />
      <li className='product-page-title'>{product.title}</li>
      <li className='product-page-description'>{product.description}</li>
      <li className='product-page-price'>{product.price}$</li>
    </ul>
  );
}
