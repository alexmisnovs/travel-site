var $ = require('jquery');
 Person = require('./modules/Person');

 console.log('scripts bundled automatically');

var john = new Person('John', 'Blue');

john.greet();

var jane = new Person('Jane', 'Orange');

jane.greet();   

$('h1').remove();