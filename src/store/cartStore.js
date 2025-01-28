import { makeObservable, observable, action } from "mobx"

class Cart {
    cart = []

    constructor() {
        makeObservable(this, {
            cart: observable.ref,
            deleteCartProduct: action.bound,
            addCartProduct: action.bound,
        })
    }

    addCartProduct(product) {
        this.cart.push(product)
    }

    deleteCartProduct(id) {
        this.cart = this.cart.filter((product) => product.id !== id)
    }
}

export default new Cart()