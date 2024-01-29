/**
 * Implement an amazon shopping cart App
 * 1. Add item to cart
 * 2. 3% tax should be applied to items in cart
 * 4. Buy item = cart ----> purchases
 * 5. clear cart
 */

let user = {
    name: "jude",
    cart: [],
    purchases: []
}
let compose = (f,g) => (...fn) => f(g(...fn))
function purchaseItem(...fn){
    return fn.reduce(compose)
}
function addItemToCart(user, item){
    let updatedCart = user.cart.concat(item)
    return Object.assign({}, user, {cart: updatedCart});
}
function applyTaxToItem(user){
    let cart = user.cart
    let taxRate = 1.3
    let updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price * taxRate
        }
    })
    return Object.assign({}, user, {cart: updatedCart});
}
function buyItem(user){
    let purchases = user.cart
    return Object.assign({}, user, {purchases: purchases});
}
function clearCart(user){
    let cart = []
    return Object.assign({}, user, {cart: cart});
}

let response = purchaseItem(clearCart, buyItem, applyTaxToItem, addItemToCart)(user, {name: "shoes", price: 2000})
console.log(response)