const normalPerson = {
    firstName : "rahim",
    lastName : "uddin",
    salary :"1300",
    getFullName : function(){
        console.log(this.firstName,this.lastName);
    }
    ,
    chargeBill : function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }

}
const result = normalPerson.getFullName;
console.log(result);
normalPerson.chargeBill(300);
console.log(normalPerson.salary);