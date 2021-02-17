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
// console.log(prices);
products.forEach(product => console.log(product.name))