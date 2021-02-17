//array destructing
// const numbers =[54,54];
// const [x,y] = [53,24];
// console.log(x,y)
const numbers =[53,52,56,78];
const [x,y] = numbers;
// console.log(x,y)

function boxify(num1){
    return [num1,num1+4];

}
const [box1,box2] = boxify(5);
console.log(box1,box2)

// object destructing 
const {name,age} = {id:3,money:34,name:'rahim',age:45}

console.log(name,age);
console.log(name,age);