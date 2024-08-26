const fs = require("fs");

const a = 10;

setImmediate(() => console.log("setImmediate")); //sixth

fs.readFile("./file.txt", "utf-8", () => {
  //fourth
  console.log("File Reading CB");
});

setTimeout(() => console.log("Timer expired"), 0); //fifth
function printA() {
  console.log("a = ", a);
}

printA(); //second
console.log("Last line of code"); //third
