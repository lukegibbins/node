var module2 = require('./module2'); //module
var module3_runhttp = require('./module3_http') //module
var _ = require('underscore'); // lib

class Underscore {
    isCarPresent(car) {
        let cars = ['Vauxhall', 'BMW', 'Mercedes', 'Saab'];
        if (_.contains(cars, car)){
            return car +" is present.";
        } else {
            return car + " is not present";
        }
    }
}

console.log('I am module 1: Hello');
module2();
var underscore = new Underscore();
console.log(underscore.isCarPresent("BMW"));
module3_runhttp();
