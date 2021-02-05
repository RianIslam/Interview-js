var name = "wow";
function add(num1,num2){
    var result = num1 + num2;
    console.log('inside the function', name)
    return result;
    
}
console.log('outside the function', name);
var sum = add(1,3);
console.log(sum);