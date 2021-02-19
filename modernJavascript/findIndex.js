var number = [1,3,4,5,6,8,9]
var result= number.findIndex((currentValue,index,arr)=>{
    return !(currentValue % 2);
})
console.log(result)