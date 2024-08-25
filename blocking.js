//Date-25-08-24
const crypto = require("node:crypto");

console.log("Namaste Node");

var a = 5;
var b = 10;

const key = crypto.pbkdf2Sync("secret", "salt", 100000, 64, "sha512"); //blocking-I/O
console.log(key.toString("hex"));

//password based key derivative function (Non-Blocking I/0)
//It also done by libuv
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log(key.toString("hex"));
});

function multiply(a, b) {
  return a * b;
}
let c = multiply(a, b);
console.log(c); //Second Run
