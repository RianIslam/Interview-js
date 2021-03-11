let x= 4;
let y= 5;
let z= x*y;
var myObj ={
    name:'javascript',
    founder:'brendan Eich',
    estd:'1995',
    ranking:1,
    x,
    y,
    z
};
var keys = Object.keys(myObj)
var values = Object.values(myObj)
var entries = Object.entries(myObj)
console.log(entries)
console.log(values)
console.log(keys)
console.log(myObj);