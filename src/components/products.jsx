import { getProductsData } from "../services/products";
import List from "./productsList";
import { useDispatch } from "react-redux";
import { saveProduct } from "../store/productSlice";
import Form from "./productsForm";
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
      <Form />
      <ul className="product-list">
        <List />
      </ul>
    </div>
  )
}