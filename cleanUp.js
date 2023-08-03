// Each example below has at least one opportunity for improvement.

// YOUR TASK:
//   Modify the code to make that improvement(s)
//   write a JS comment to explain what you changed, and why
//   make sure the code you submit WORKS - you can run this entire file 
//     using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() {
  console.log("Hello, what is your name?");
}

askForName();

// I didn't do much here, just added semicolons and changed the 
// so that I can view the code better.


// EX 2:
function addThreeNums(x, y, z) { //here, the function addThreeNums will set x + y + z parameters to = to sum, and return it when called.
var sum = x + y + z
return sum;
      }

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));
// I simplified first, second and third by replacing it with x, y, z. 
//And then I printed just the return value from adding console.log. Note: what we see in the console 
//is not always the return value.

//OR we can do:
function addThreeNums(x, y, z) { //here, the function addThreeNums will set x + y + z parameters to = to sum, and return it when called.
  var sum = x + y + z
  return sum;
        }
  
        //storing a return value into a variable
  var sum1 = (addThreeNums(1, 2, 3));
  var sum2 = (addThreeNums(4, 2, 7));

  console.log(sum1)
  console.log(sum2)
  //1. storing a return value into a variable
  //2. calling the variable that stores the return value to print using console.log().

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();
//Here, I just spelled out func to function, and added a space between makeFreshPesto() {}

//  EX 4:
function average(num1, num2) {
var sum = num1 + num2;
var avg = sum / 2;
return avg //note: you can't use ave or sum outside of this code block because it only applies & is defined
// within this code block.
}

console.log(average(2,6)); //this prints the returned value avg.