// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting(greet) {
    return `${greet}`
}
console.log(greeting("Howdy"));
console.log(greeting("Hola"));

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
name = prompt("Enter your name:")
function customGreeting() {
    return `Howdy, ${name}!`
}

console.log(customGreeting());

// OR
function customGreeting(name) {
    return `Howdy, ${name}!`
}

console.log(customGreeting("Amy"));
console.log(customGreeting("XiaoXinYu"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, middle, last) {
    var fullName = first + " " + middle + " " + last
    return fullName
}
console.log(greetPerson("Amy","XinYu", "Siu"))
console.log(greetPerson("Richard","ChenWei", "Siu"))

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num) {
    return num ** 2;
}

console.log(square(5));
console.log(square(6));

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock(quantity,item) {
    if (quantity === 0 ) {
        return `${item} - OUT of stock!`;
    } else if (quantity > 0 && quantity <= 3) {
        return `${item} - running LOW`;
    } else {
        return `${item} is stocked`;
    }
}

console.log(checkStock(4, "Coffee"));
// checkStock(4, "Coffee");
// // => "Coffee is stocked"

console.log(checkStock(3, "Tortillas"));
// checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

console.log(checkStock(0, "Cheese"));
// checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"

console.log(checkStock(1, "Salsa"));
// checkStock(1, "Salsa");
// // => "Salsa - running LOW"