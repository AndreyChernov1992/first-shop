import { useParams } from 'react-router-dom';
import { getSingleProductData } from '../../services/productsApi';
import { useEffect, useState } from 'react';
import cls from './productPage.module.scss'
import productStore from '../../store/productsStore'

export default function ProductPage() {
  const { id } = useParams();
  const {products} = productStore;
  const [product,setProduct] = useState({})

  useEffect(() => {
    let currentProduct = products?.find((product) => product.id === id);
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
