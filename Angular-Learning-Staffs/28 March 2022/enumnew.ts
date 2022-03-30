//The enums are used to define collections of constants
//once the enum is declared with some values they are final and they can not be modified 
enum Months {
    'january'='JAN',
    'February'='FEB',
    'March'='MAR'
}

//now we can not modify or change enum once it is created
//We can assess it through variable
//Create Variable   

let monthName : Months=Months['january'];

//Create template string to concat string

let output:string =`
    Month Name :${monthName}
    `;
    console.log(output);
