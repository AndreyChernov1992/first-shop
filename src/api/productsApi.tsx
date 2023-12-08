import {BaseApi} from "./BaseApi";

class ProductsApi extends BaseApi  {

    endpoint = '/products'
    
    getProducts(config?: object) {
        return this.request('GET', '', config)
    }

}

export default ProductsApi