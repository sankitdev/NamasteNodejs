//modules protects their variables and functions from leaking by defualt
//if we want to access any function or variable to another js file we will need to export it

console.log("Sum is imported but will not work");
function sum(a, b) {
  return a + b;
}

module.exports = sum;
