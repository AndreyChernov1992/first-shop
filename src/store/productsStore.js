import { makeObservable, observable, action } from "mobx"
import { getProductsData } from "../services/productsApi"

class Products {
    products = []

    constructor() {
        makeObservable(this, {
            products: observable,
            deleteProduct: action.bound,
            addProducts: action.bound,
            getProducts: action.bound,
        })
    }

    addProducts(product) {
        this.products.push(product)
    }

    deleteProduct(id) {
        this.products = this.products.filter((product) => product.id !== id)
    }

    async getProducts() {
        try {
            const data = await getProductsData()
            this.products = [...data]
        } catch (error) {
            console.error("Failed to fetch products:", error)
        }
    }
}

export default new Products()