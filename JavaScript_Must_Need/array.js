// const numbers = [3,56,97,56,967];
// const friends = ['rafiq','jabbar','barkat'];
const products = [
    {id: 1, name: 'laptop', price:8485},
    {id: 2, name: 'mobile', price:244},
    {id: 3, name: 'watch', price:533},
    {id: 4, name: 'tablet', price:245}
];  

//map
const names = products.map(product => product.name);
const prices = products.map(pd => pd.price)
const price2 = products.map(pd => {
    return pd.price;
})
console.log(price2)
console.log(prices);
//forEach
products.forEach(product => console.log(product.name))

// filter
const cheaper = products.filter(pd =>pd.price <1000);
console.log(cheaper)

// remove an item using filter

const remaing = products.filter(ps => ps.id !=3);
console.log(remaing)

//find
const hasWatch = products.find(pd=> pd.name === "watch");
console.log(hasWatch)

// reduces
// includes
// push
// pop
// length
// indexOf