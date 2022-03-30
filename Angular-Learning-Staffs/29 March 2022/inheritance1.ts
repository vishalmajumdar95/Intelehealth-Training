class Person{
    firstName:string;
    lastName:string;
    greet(){
        console.log("hello world!!");
    }
}

class Programmer extends Person{
    firstName:string="Sachin";
    lastName: string="Tendulkar";
    greet(){
        console.log("Hello Pune"); 
       }
       greet1(){
           return this.firstName+" "+this.lastName;
       }

       greetOne(){
           this.greet();
           super.greet();
       }
}

var aPerson = new Programmer();
//console.log(aPerson.greetOne());
aPerson.greetOne();
//console.log(aPerson.greet1());