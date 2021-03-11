var number =[1,3,4,5,6,7]
var sum = number.reduce((preValue,currentValue) =>{
    return preValue + currentValue;
},0)

console.log(sum);