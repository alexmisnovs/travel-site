var $ = require('jquery');
//People = require('./modules/Person'); old way of importing the module
import {Person, Adult} from './modules/Person';

 console.log('scripts bundled automatically');

var john = new Person('John', 'Blue');
// have to do this if you export multiple classes from the same module. Confusuin is because I used fileName Person
john.greet();

var jane = new Adult('Jane', 'Orange');

jane.greet(); 
jane.payTaxes();  

$('h1').remove();