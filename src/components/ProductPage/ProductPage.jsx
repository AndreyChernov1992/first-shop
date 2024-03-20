import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSingleProductData } from '../../services/productsApi';
import { useEffect, useState } from 'react';
import cls from './productPage.module.scss'

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
    <ul className={cls.productPage}>
      <img
        className={cls.productPageImage}
        alt='product'
        src={product.image}
      />
      <li className={cls.productPageTitle}>{product.title}</li>
      <li className={cls.productPageDescription}>{product.description}</li>
      <li className={cls.productPagePrice}>{product.price}$</li>
    </ul>
  );
}
