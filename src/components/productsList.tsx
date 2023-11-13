const Item = ({ id, image, title, price }) => (
    <li className="product-list-item" key={id}>
        <img alt="product" className="product-list-item__image" src={image} />
        <span className="product-list-item__title">{title}</span>
        <span className="product-list-item__price">{price}$</span>
        <button className="product-list-item__btn">Add to Cart</button>
    </li>
)

export default Item