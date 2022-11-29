import ProductsApi from "../api/productsApi";

export async function getProductsData () {
    const api = new ProductsApi()
        const {data} = await api.getProducts()
        return data
}


    