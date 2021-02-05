const normalPerson = {
    firstName : "rahim",
    lastName : "uddin",
    salary :"1300",
    getFullName : function(){
        console.log(this.firstName,this.lastName);
    }
    ,
    chargeBill : function(amount,tips,tax){
        console.log(this);
        this.salary = this.salary - amount -tips - tax;
        return this.salary;
    }

}
// const result = normalPerson.getFullName;
// console.log(result);
// normalPerson.chargeBill(300);
// console.log(normalPerson.salary);


const heroPerson ={
    firstName : 'hero',
    lastName : 'balam',
    salary : '5200'
}

const frindlyPerson ={
    firstName : 'hero',
    lastName : 'Alom',
    salary : '1200'
}

// const heroChargBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargBill(300);


// normalPerson.chargeBill.call(heroPerson,700,400,600);
// normalPerson.chargeBill.call(heroPerson,740,600,400);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(frindlyPerson,300,300,200)
// console.log(frindlyPerson.salary)


normalPerson.chargeBill.apply(heroPerson,[3000,455,77])
console.log(heroPerson.salary)