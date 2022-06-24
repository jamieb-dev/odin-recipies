console.log('Hello, World!');
// this is a comment

let message; // creates (declares) a variable called message
message = 'Hello';

// creates a variable that cannot be changed after it has been addigned a value
const myBirthday = '21.08.1985';

// you can use contstants for hard to remeber things like colours e.g
const COLOUR_RED = '#FF0000';
// use capitals and underscores if the value is unknown before script excecution e.g. user input etc.

console.log("Doc!, we gotta get back to");
console.log(myBirthday);
// can also be written as:
// let message = 'Hello'

console.log(message);


// creates a variable (greeting) and gives it the same value/data as another variable (message)

// let greeting;
// greeting = message;
// alert(greeting);

let title = 'john';
let admin;
title = admin;

console.log(admin);



let time = 1200;

if (time >= 1200) {
    console.log('Good afternoon User!');
}
else if (time < 1200) {
    console.log('Good Morning User');
}
else {
    console.log('Sorry, the time space continuum seeems to be broken right now. Please try again later.');
}