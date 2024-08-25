//Date-19-08-24

const fs = require("fs");
const https = require("https");

console.log("Namste Node JS"); //First Run

var a = 102567;
var b = 20986;

//this is sync way to read file which actually blocks the main thread.
//v8 engine will not move to next line untill this file read is finshed
// Though it is synchronous it does mean V8 engine is read file, it still get offloade to libuv and v8 waits untill libuv give result

let result = fs.readFileSync("./file.txt", "utf-8"); //Blocking I/O
console.log("I am fileSync");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Data fetched succesfully"); //Fourth Run
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds"); //Fifth Run
}, 5000);

//Below is async readfile methos and we should we only this. We should not block the main thread of V8
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (data) console.log("File read successfully"); //third Run //Non-Blocking I/O
});

function multiply(a, b) {
  return a * b;
}
let c = multiply(a, b);
console.log(c); //Second Run
