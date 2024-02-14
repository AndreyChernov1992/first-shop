import {BaseApi} from "./BaseApi";

class ProductsApi extends BaseApi  {

    endpoint = '/products'
    
    getProducts(config) {
        return this.request('GET', '', config)
    }
    addProducts(config) {
        return this.request('POST', '', config)
    }
    removeProducts(config) {
        return this.request('DELETE', config, '')
    }

}

export default ProductsApi