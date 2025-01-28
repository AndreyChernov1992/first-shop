import { addProductsData } from '../services/productsApi';
import { useState } from 'react';
import PureModal from 'react-pure-modal';
import cls from './ProductsForm.module.scss'
import productStore from '../store/productsStore'
import { observer } from 'mobx-react-lite';

const emptyProduct = { title: '', price: '', image: '' };

const ProductsForm = observer(() => {
  const [newProduct, setNewProduct] = useState(emptyProduct);
  const [modalToggle, setModalToggle] = useState(false);

  const {addProduct} = productStore;

  const handleSubmit = () => {
    addProductsData(newProduct)
      .then((data) => {
        addProduct(data);
        setNewProduct(emptyProduct);
      })
      .catch(err => console.log(err))
  };

  const onChange = (key, value) =>
    setNewProduct((prev) => ({ ...prev, [key]: value }));
  
  const modalWindowToggle = () => {
    setModalToggle(!modalToggle)
  }

  return (
    <div>
      <button
        className={cls.productListFormAdd}
        onClick={() => modalWindowToggle()}
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
          onClick={() => handleSubmit()}
        ></input>
      </PureModal>
    </div>
  );
})

export default ProductsForm;