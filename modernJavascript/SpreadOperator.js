var numbers =[1,3,4,5,6,7]

var newNumber = [...numbers, 1,3,4,5,6,7]

console.log(newNumber)

var one = [1,3,4,5,6,7]
var two = [1,3,4,5,6,7]

var wow = [...one,...two]
var objOne = {
    name:'branden Echi',
    estb:'1'
}
var objTwo = {
    name:'rian',
    estb:'4'
}
console.log({
    ...objOne,
    ...objTwo
})
console.log(wow)