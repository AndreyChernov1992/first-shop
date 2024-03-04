import { useDispatch } from 'react-redux';
import { addProduct, deleteProduct, saveProduct } from '../productSlice';
import { addProductsData, deleteProductsData, getProductsData } from '../../services/productsApi';

const dispatch = useDispatch()

export const saveData = async () => {
    try {
      const data = await getProductsData();

      dispatch(saveProduct(data));
    } catch (err) {
      console.log(err);
    }
};

export const deleteItem = async (id) => {
    try {
      deleteProductsData(id);
      dispatch(deleteProduct(id));
    } catch (err) {
      console.log(err);
    }
};
  
export const handleSubmit = (setNewProduct, newProduct, emptyProduct) => {
    try {
      addProductsData(newProduct).then((data) => {
        dispatch(addProduct(data));
        setNewProduct(emptyProduct);
      });
    } catch (err) {
      console.log(err);
    }
};