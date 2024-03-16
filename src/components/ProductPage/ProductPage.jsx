import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSingleProductData } from '../../services/productsApi';
import { useEffect, useState } from 'react';

export default function ProductPage() {
  const { id } = useParams();
  const productsArray = useSelector((state) => state.products);
  const [product,setProduct] = useState({})

  useEffect(() => {
    let currentProduct = productsArray?.find((product) => product.id === id);
        const getProduct = async () => {
               try {
                   const data = await getSingleProductData(id);
                   data ? setProduct(data) : setProduct(currentProduct)
               }
               catch (e) {
                   console.log(e)
               }
           }
        getProduct();
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
