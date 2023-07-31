// console.log('Hello, World!');
// // this is a comment

// let message; // creates (declares) a variable called message
// message = 'Hello';

// // creates a variable that cannot be changed after it has been addigned a value
// const myBirthday = '21.08.1985';

// // you can use contstants for hard to remeber things like colours e.g
// const COLOUR_RED = '#FF0000';
// // use capitals and underscores if the value is unknown before script excecution e.g. user input etc.

// console.log("Doc!, we gotta get back to");
// console.log(myBirthday);
// // can also be written as:
// // let message = 'Hello'

// console.log(message);

// // creates a variable (greeting) and gives it the same value/data as another variable (message)

// // let greeting;
// // greeting = message;
// // alert(greeting);

// let title = 'john';
// let admin;
// title = admin;

// console.log(admin);

// let user = prompt('Please enter your username.');
// let time = prompt("What's the time? e.g 1300");

// if (time >= 1200) {
//     alert('Good afternoon ' + user);
// }
// else if (time < 1200) {
//     alert('Good Morning User');
// }
// else {
//     alert('Sorry, the time space continuum seeems to be broken right now. Please try again later.');
// }

// let age = prompt("How old are you?");
// let accessAllowed;
// if (age >= 18) {
//     accessAllowed = true;
// }
// else {
//     accessAllowed = false;
// }

// if (accessAllowed == false) {
//     alert("Sorry, your request for access has been denied.");
// }
// else {
//     alert("Access granted.");
// }

// console.log("accessAllowed:", accessAllowed)

// create a switch statement

// let age = window.prompt("How old are you?");
// console.log("age: ", age);
// switch (true) {
//     case age >= 18:
//         alert("Access granted");
//         console.log("Access granted to user.")
//         break;
//     case age < 18:
//         alert("Access denied!");
//         break;
//     default:
//         console.log("Something isn't right.");
// }

// a function

// function greet() {
//     console.log("Hello, world!");
// }

// let user = window.prompt("Please enter a username. (Case sensitive.)");
// let userPassword = window.prompt("Enter password for " + user);
// let loggedInUser

// switch (true) {
//     case user == "jamie":
//         loggedInUser = user;
//         console.log("Logged in as: ", loggedInUser);
//         break;
//     case user !== "jamie":
//         alert("Sorry, you do not have an account.");
//         break;
//     default: console.log("Nothing done.");
//     break;
// }

let user = window.prompt("Enter your username.");
const jamiePassword = "jamie";
let passwordAttempt;
switch (true) {
  case user == "jamie":
    passwordAttempt = window.prompt("Enter a password.");
    switch (true) {
      case passwordAttempt !== jamiePassword:
        alert("Incorrect password attempt.");
        break;
      case passwordAttempt == jamiePassword:
        alert("Logged in as " + user);
        console.log("Logged in: " + user);
        break;
    }
    break;
  default:
    alert("Sorry, you don't have an account. ");
    const newUser = window.prompt("Enter a username for your account.");
    switch (true) {
      case newUser == null:
        alert("Please enter a valid username.");
        break;
    }
    const newUserPassword = window.prompt("Add a password.");
    let newUserPasswordAttempt = window.prompt("Confirm your password.");
    switch (true) {
      case newUserPasswordAttempt == newUserPassword:
        alert("Account created for " + newUser);
        console.log("Loggin in as: " + newUser);
        break;
      case newUserPasswordAttempt !== newUserPassword:
        window.prompt("Passwords do not match. Account creation cancelled.");
        break;
      default:
        console.log("Something went wrong");
    }
}
