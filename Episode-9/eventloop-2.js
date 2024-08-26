/*
 * a = 100
 * last line of code
 * procss.nextTick
 * Promise
 * setImmididate
 * File reading CB
 */

const fs = require("fs");
const a = 100;
setImmediate(() => console.log("setImmidiate"));

Promise.resolve("Promise").then(console.log);
fs.readFile("./file.txt", "utf-8", () => {
  console.log("File reading CB");
});

setTimeout(() => console.log("Timer Expired"), 0);
process.nextTick(() => console.log("process.nextTick"));

function printA() {
  console.log("a=", a);
}

printA();
console.log("last Line of Code");
