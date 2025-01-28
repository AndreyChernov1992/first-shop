import { makeObservable, observable, action, flow } from "mobx"
import { getProductsData } from "../services/productsApi"

class Products {
    products = []

    constructor() {
        makeObservable(this, {
            products: observable,
            deleteProduct: action.bound,
            addProducts: action.bound,
            getProducts: flow.bound,
        })
    }

    addProducts(product) {
        this.products.push(product)
    }

    deleteProduct(id) {
        this.products = this.products.filter((product) => product.id !== id)
    }

    *getProducts() {
        try {
            const data = yield getProductsData()
            this.products = [...data]
        } catch (error) {
            console.error("Failed to fetch products:", error)
        }
    }
}

export default new Products()