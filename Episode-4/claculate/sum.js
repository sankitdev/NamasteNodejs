//Date-19-08-24

//modules protects their variables and functions from leaking by defualt
//if we want to access any function or variable to another js file we will need to export it

console.log("Sum is imported but will not work");
function sum(a, b) {
  return a + b;
}

// var x = 5;

// module.exports = sum; (This is used to export single )
module.exports = { sum };
