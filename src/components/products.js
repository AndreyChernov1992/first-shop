import React from "react";
import { Component } from "react";
import { getProductsData } from "../services/products";

class Products extends Component {
    state = {
        products: []
    }

    async componentDidMount() {
        const products = await getProductsData()
        this.setState({products})
    }

    renderProductList() {
        return this.state.products.map(product =>
        <li className="product-list-item" key={product.id}>
        <img alt="product" className="product-list-item__image" src={product.image} />
        <span className="product-list-item__title">{product.title}</span>
        <p className="product-list-item__desc">{product.description}</p>
        <span className="product-list-item__price">{product.price}$</span>
         </li>
        )
    }

    render () {
        return (
            <ul className="product-list">{this.renderProductList()}</ul>
        )
    }
}

export default Products