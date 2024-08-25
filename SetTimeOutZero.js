console.log("Namaste Node");

let a = 5,
  b = 10;

//There is trust Issues with setTimeOut. it is an async code which will only executes after the global execution context (GEC) is empty
// Althout here we have written 0 but still libuv will take this and then when the call stack is empty then it will be pushed.
//Also node js doesn't take guarrante of excat timing
setTimeout(() => {
  console.log("Call me Immidietly");
}, 0);

setTimeout(() => {
  console.log("Call me Next");
}, 1000);

function sum(a, b) {
  let result = a + b;
  return result;
}

console.log(sum(a, b));
