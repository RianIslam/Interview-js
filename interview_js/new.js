class Person{
    constructor(firstName,lastName,salary){
        this.fistName = firstName
        this.lastName = lastName
        this.salary = salary;
    }
}

const heroPerson = new Person("hero","hashu","599");
console.log(heroPerson);

// function Person1(firstName,lastName,salary){
//     this.fistName  = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
// }
// const oldPerson = new Person1('grand','papa',1200)
// console.log(oldPerson)
