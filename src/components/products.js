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
        <li className="products" key={product.id}>
        <img className="productImage" src={product.image} />
        {product.title} {product.description} {product.price}</li>
        )
    }

    render () {
        return (
            <ul>{this.getProducts()}</ul>
        )
    }
}

export default Products