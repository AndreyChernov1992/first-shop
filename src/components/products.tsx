import { Component } from "react";
import { getProductsData } from "../services/products";
import Item from "./productsList";
import { IProduct } from "../api/apiModel";

class ProductsList extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        const getProducts = async() => {
            try {
              const products = await getProductsData()
              this.setState({products})
            }
            catch (err) {
              console.log(err)
            }
          }
      
      getProducts()
    }

    render () {
        return (
          <ul className="product-list">{this.state.products.map(product => <Item {...product as IProduct} />)}</ul>
        )
    }
}

export default ProductsList