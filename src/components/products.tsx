import { useEffect, useState } from "react";
import { getProductsData } from "../services/products";
import Item from "./productsList";
import { IProduct } from "../api/apiModel";

export default function ProductsList () {
    const [products, setProducts] = useState([])

    useEffect (() => {
        const getProducts = async() => {
            try {
              const data = await getProductsData()
              setProducts(data)
            }
            catch (err) {
              console.log(err)
            }
      }
      
      getProducts()

    }, [products])


    return (
      <ul className="product-list">{products.map(product => <Item {...product as IProduct} />)}</ul>
    )
  }

