import {Person} from './class';

class Admin extends Person{

}

class Manager extends Person{

}
//create instances

var admin = new Admin('Sachin', 'T');
var manager = new Manager('a','a');
console.log(admin.getFullName ());
          