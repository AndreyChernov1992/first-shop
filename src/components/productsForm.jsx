import { useDispatch } from 'react-redux';
import { addProductsData } from '../services/productsApi';
import { addProduct } from '../store/productSlice';
import { useState } from 'react';
import PureModal from 'react-pure-modal';
// import { useSubmit } from '../store/hooks/hooks';
// import  useHooks  from '../store/hooks/hooks';

const emptyProduct = { title: '', price: '', image: '' };

export default function ProductsForm() {
  const [newProduct, setNewProduct] = useState(emptyProduct);
  const [modalToggle, setModalToggle] = useState(false);
  // const {handleSubmit} = useHooks()

  const dispatch = useDispatch();

  const handleSubmit = () => {
    try {
      addProductsData(newProduct).then((data) => {
        dispatch(addProduct(data));
        setNewProduct(emptyProduct);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (key, value) =>
    setNewProduct((prev) => ({ ...prev, [key]: value }));

  return (
    <div>
      <button
        className='product-list-form-add'
        onClick={() => setModalToggle(!modalToggle)}
      >
        Add Product
      </button>
      <PureModal
        isOpen={modalToggle}
        onClose={() => setModalToggle(false)}
      >
        <div>
          Title:
          <input
            name='Title'
            type='text'
            value={newProduct.title}
            onChange={(e) => onChange('title', e.target.value)}
          />
        </div>
        <div>
          Price:
          <input
            name='Price'
            type='text'
            value={newProduct.price}
            onChange={(e) => onChange('price', e.target.value)}
          />
        </div>
        <div>
          Image URL:
          <input
            name='Image'
            type='url'
            value={newProduct.image}
            onChange={(e) => onChange('image', e.target.value)}
          />
        </div>
        <input
          type='button'
          value='Sumbit'
          onClick={() => dispatch(handleSubmit())}
        ></input>
      </PureModal>
    </div>
  );
}
