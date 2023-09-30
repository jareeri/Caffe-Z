var x = 5;
var z = 3;
console.log(x + z);
var name = prompt("Please enter your name:", "Abdullah");
var gender = prompt("Please enter your gender:", "male");
if (gender === "male") {
    alert(`Welcome, Mr ${name}.`);
  } else if (gender === "female") {
    alert(`Welcome, Ms ${name}.`);
  } else {
    alert(`Welcome, ${name}`);
  }
// Ask the user if they want a hot or cold drink
const drinkType = prompt("Do you want a hot or cold drink?");

// Ask the user for the name of their drink
const drinkName = prompt("Enter the name of your drink:");

// Alert the user that their drink is getting prepared
alert(`Your ${drinkType} ${drinkName} is getting prepared.`);

// Print a statement on the console that shows the user's name and drink order
console.log(`${name} ordered a ${drinkType} ${drinkName}.`);
