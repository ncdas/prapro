var products = {
    1: {
        name: 'Flying Wooden Bird',
        price: 51,
        discount: 15
    },
    2: {
        name: 'Art Lamp',
        price: 29,
        discount: 100
    },
    3: {
        name: 'Handcraft 801',
        price: 79.99,
        discount: 20
    },
    4: {
        name: 'Key Holder',
        price: 2.5,
        discount: 0
    },
    5: {
        name: 'Plant Hanger',
        price: 19.85,
        discount: 0
    },
    6: {
        name: 'Orange Essence Food Flavou',
        price: 29.99,
        discount: 15
    },
    7: {
        name: 'Elbow Macaroni - 400 gm',
        price: 6.5,
        discount: 0
    },
    8: {
        name: 'Freckle Treatment Cream- 15gm',
        price: 7.5,
        discount: 10
    },
};

var shopping_cart = [2, 5, 8]

let total_price = 0;
let price = 0;

for (i = 0; i < shopping_cart.length; i++) {
    let x = 0;
    x = shopping_cart[i];
    let pp = products[x].price;
    price = (pp - (pp*(products[x].discount)/100));
    total_price += price;

}
console.log(total_price);