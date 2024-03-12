import { useDispatch } from 'react-redux';
import { addProduct, deleteProduct, saveProduct } from '../productSlice';
import {
  addProductsData,
  deleteProductsData,
  getProductsData,
} from '../../services/productsApi';

export const useSaveData = () => {
  return async () => {
    const dispatch = useDispatch();
    try {
      const data = await getProductsData();
      dispatch(saveProduct(data));
    } catch (err) {
      console.log(err);
    }
  }
}

export async function useDeleteItem(id) {
  const dispatch = useDispatch();
  try {
    await deleteProductsData(id);
    dispatch(deleteProduct(id));
  } catch (err) {
    console.log(err);
  }
}

export function useSubmit(setNewProduct, newProduct, emptyProduct) {
  const dispatch = useDispatch();
  try {
    addProductsData(newProduct).then((data) => {
      dispatch(addProduct(data));
      setNewProduct(emptyProduct);
    });
  } catch (err) {
    console.log(err);
  }
}

// const useHooks = () => {
//   return {
//     saveData,
//     deleteItem,
//     handleSubmit,
//   };
// };

// export default useHooks;
