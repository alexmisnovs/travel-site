class Person {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
  
    greet(){
        console.log('Hi there, my name is '+this.name + '. And my fav color is '+this.color);
    }

}

class Adult extends Person{
    payTaxes(){
        console.log( this.name+ ' now owes $0 taxes');
    }
}
/**  Old way pre ES6 of exporting modules
 * module.exports = {
    Person: Person, 
    Adult: Adult
};
 */
// new way ES6
export {
     Person,
     Adult
} 

//module.exports = Person;
// console.log('Hello from Person JS');
// module.exports.superProperty = "Super property";
// module.exports.exampleFunction = function(a,b){
//     return a+b;
// }
// module.exports.class = {
//     greet: function(name){
//         console.log('hello my name is '+ name);
//     }
// }
// so practically we can export anything with exports. Variables, functions etc what we can use in app.js