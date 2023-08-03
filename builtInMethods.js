// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"

var phrase = "Hello World".toLowerCase();
console.log(phrase); 
// comment: toLowerCase method changes "Hello World" string all to lower case.

var phrase = "Hello World".includes("Hello");
console.log(phrase); 
//comment: includes() method is a Boolean method that returns true if 
//string includes a specified string. In this case, we're using includes
//method on "Hello World" string and seeing it it includes "Hello". And 
//since it does include "Hello", the return value is true.

var phrase = "Hello World".endsWith("Hello");
console.log(phrase); 
//comment: endsWith() method is a Boolean method that returns true/false if 
//string ends with a specified string. In this case, we're using endsWith()
//method on "Hello World" string and seeing it ends with "Hello". And 
//since it does not end with "Hello", the return value is false.

var phrase = "Hello World".endsWith("rld");
console.log(phrase); 
//comment: endsWith() method is a Boolean method that returns true/false if 
//string ends with a specified string. In this case, we're using endsWith()
//method on "Hello World" string and seeing it ends with "rld". And 
// since it does, the return value is false.

// // SECTION 2: Calling methods on variables assigned to strings.
// // Declare 2 variables assigned to strings.
// // Call a different built-in JavaScript method on each of your variables. 
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// // Include comments above each method call explaining the impact and return value of that method.

// // Declare 2 variables assigned to strings.
var name = "Amy Siu"
var email = "asiu1028@gmail.com"

// // SECTION 2: Calling methods on variables assigned to strings.

//charAt() method is called on the name variable, which stores the string object "Amy Siu".
//charAt(1) method returns the index character at position 1 in the string. 
//In this case, the return value is m because character at character position 1 is m.
//console.log() statement prints return value of chartAt() method (m) to the console.
console.log(name.charAt(1)); //same as console.log(name[1]);


//QUESTION: why is console.log(name[-2]) undefined?
//at() method is called on the name variable, which stores the string object "Amy Siu".
//at(-2) method returns the index character at position -2 in the string (starting at end of string position -1)
//In this case, the return value is i because character at character position -2 is i.
//console.log() statement prints return value of chartAt() method (i) to the console.
console.log(name.at(-2)); 
//QUESTION: why is console.log(name[-2]) undefined?

//at() method is called on the email variable, which stores the string object "asiu1028@gmail.com".
//at(0,8 method returns the index character values from position 0 up to 8 (not inclusive) 
//In this case, the return value is asiu1028 because characters from position 0 to 8 (not including 8) is asiu1028.
//console.log() statement prints return value of at() method (asiu1028) to the console.
console.log(email.substr(0,8)); 

console.log(email.repeat(2)); //repeats email string value twice

// // EXAMPLE
// // The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// // The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// // In this example, the return value is true, because "Jeff" does start with "J".
// // The console.log() statements prints the return value of the startsWith() method (true) to the console.
// var firstName = "Jeff";
// console.log(firstName.startsWith("J"));


// // SECTION 3: Calling methods on variables assigned to arrays.
// // Declare 2 variables assigned to arrays.
// // Call a different built-in JavaScript method on each of your variables. 
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// // Include comments above each method call explaining the impact and return value of that method.

// // Declare 2 variables assigned to arrays.
var friends = ["Lam", "Max", "Lilly", "Lillith", "Sanela"]
var thingsToDo = ["paddleboard", "hike", "read", "run"]

// // SECTION 3: Calling methods on variables assigned to arrays.

//concat() array method concatenates/merges two or more arrays. It doesn't change existing array but returns a 
//new one. In this case, we call on friends and concatenate array thingsToDo to friends, returniing ['Lam',    'Max',
// 'Lilly',  'Lillith','Sanela', 'paddleboard','hike', 'read','run']
console.log(friends.concat(thingsToDo))
//I tested out this as well to see what would happen, and it merged a, b, c to the array friends when I called 
//concat(a,b,c) on friends variable. 
console.log(friends.concat(["a", "b", "c"])

//reverse() array method reverses the array. 
//In this case, we call on thingsToDo variable and reverse the array. 
//It returns: [ 'run', 'read', 'hike', 'paddleboard' ]
console.log(thingsToDo.reverse());