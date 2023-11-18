import {BaseApi} from "./BaseApi";

class ProductsApi extends BaseApi  {

    endpoint = '/products'
    
    getProducts(config: object) {
        console.log(this.request('GET', '', config))
        return this.request('GET', '', config)
    }

}

export default ProductsApi