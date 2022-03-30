//Destruction allows you to extract data from an array and object
var student = {
    name: 'Sachin Tendulkar',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};
function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your Maths score is ' + (student.scores.maths));
    console.log('Your English score is ' + (student.scores.english));
    console.log('Your Science score is ' + (student.scores.science));
}
displaySummary(student);
// const student = {
//     firstName:'Sachin',
//     lastName:'Tendulkar',
//     country:'India'
// };
// //Object Destructuring
// const { firstName, lastName, country } = student;
// console.log(firstName, lastName, country);
// //array Destructuring
// let arr = [1,2];
// let[x1,x2]=arr;
// console.log(x1,x2);
