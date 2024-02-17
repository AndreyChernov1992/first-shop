import { useDispatch } from 'react-redux';
import { addProductsData } from '../services/products';
import { addProduct } from '../store/productSlice';
import { useState } from 'react';

const emptyProduct = {title: '', price: '', image: ''}

export default function ProductsForm() {

  const [newProduct, setNewProduct] = useState(emptyProduct)

  const dispatch = useDispatch();

  const handleSubmit = () => {
    try {
      addProductsData(newProduct)
        .then((data) => {
          dispatch(addProduct(data))
          setNewProduct(emptyProduct)
        }
      )  
    }
    catch (err) {
      console.log(err);
    }
  };
    
  const onChange = (key, value) => setNewProduct(prev => ({ ...prev, [key]: value }))

  return (
    <div className="product-list-form">
      <span>
        Title:
        <input
          name="Title"
          type="text"
          value={newProduct.title}
          onChange={(e) => onChange("title", e.target.value)}
        />
      </span>
      <span>
        Price:
        <input
          name="Price"
          type="text"
          value={newProduct.price}
          onChange={(e) => onChange("price", e.target.value)}
        />
      </span>
      <span>
        Image URL:
        <input
          name="Image"
          type="url"
          value={newProduct.image}
          onChange={(e) => onChange("image", e.target.value)}
        />
      </span>
      <input
        type="button"
        value="Sumbit"
        onClick={() => handleSubmit()}
      ></input>
    </div>
  );
}
