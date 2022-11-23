import {BaseApi} from "./BaseApi";

class ProductsApi extends BaseApi  {

    endpoint = '/products'
    
    getProducts (config) {
        return this.request('GET', '', config)
    }

}

export default ProductsApi