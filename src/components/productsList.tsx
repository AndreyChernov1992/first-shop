import { IProduct } from "../api/apiModel"

export default function Item({ id, image, title, price }: IProduct) {
    return (
        <li className="product-list-item" key={id}>
            <img key={image} alt="product" className="product-list-item__image" src={image} />
            <span key={title} className="product-list-item__title">{title}</span>
            <span key={price} className="product-list-item__price">{price}$</span>
            <button key="btn" className="product-list-item__btn">Add to Cart</button>
        </li>
    )
} 