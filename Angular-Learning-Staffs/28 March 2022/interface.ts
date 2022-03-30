interface Person{
    firstName:string;
    lastName:string;

    getFullName():string;
}
class Foo implements Person{
    firstName="Hii";
    lastName="Bye";
    age=23;
    getFullName(){
        return this.firstName + " " +this.lastName + " " + this.age;
    }
}
var aPerson = new Foo();
console.log(aPerson.getFullName());
