import React from "react";
import { Component } from "react";
import axiosClient from "../api/apiClient";

class Products extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        axiosClient.get('https://fakestoreapi.com/products')
        .then(res => {
            const products = res.data
            this.setState({products})
        })
    }

    getProducts() {
        return this.state.products.map(product =>
        <li className="product-list-item" key={product.id}>
        <img alt="product" className="product-list-item__image" src={product.image} />
        <p></p>
        <span className="product-list-item__title">{product.title}</span>
        <p className="product-list-item__desc">{product.description}</p>
        <span className="product-list-item__price">{product.price}$</span>
         </li>
        )
    }

    render () {
        return (
            <ul className="product-list">{this.getProducts()}</ul>
        )
    }
}

export default Products