const normalPerson = {
    firstName : "rahim",
    lastName : "uddin",
    salary :"1300",
    getFullName : function(){
        console.log(this.firstName,this.lastName);
    }
    ,
    chargeBill : function(amount){
        console.log(this);
        this.salary = this.salary - amount;
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
    salary : '1200'
}

const heroPersonBill ={
    firstName : 'hero',
    lastName : 'Alom',
    salary : '1200'
}

const heroChargBill = normalPerson.chargeBill.bind(heroPerson);
heroChargBill(300);

