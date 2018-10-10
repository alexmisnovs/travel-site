function Person (name, color) {

    this.name = name;
    this.color = color;
    this.greet = function(){
        console.log('Hello There, my name is '+this.name + '. And my fav color is '+this.color);
    }

}
module.exports = Person;
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