import { getProductsData } from "../services/products";
import ProductsParse from "./productsParse";
import { useDispatch } from "react-redux";
import { saveProduct } from "../store/productSlice";
import ProductsForm from "./productsForm";
import { useEffect } from "react";

export default function ProductsList () {
  const dispatch = useDispatch()

  const loadData = async () => {
    try {
      const data = await getProductsData()
      
      dispatch(saveProduct(data))
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    loadData()
  }, []) 

  return (
    <div>
      <ProductsForm />
      <ul className="product-list">
        <ProductsParse />
      </ul>
    </div>
  )
}