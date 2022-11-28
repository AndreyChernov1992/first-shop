import ProductsApi from "../api/productsApi";

export function getData () {
    let a = new ProductsApi()
        return a.getProducts()
}


    