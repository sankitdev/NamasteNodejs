// 15
// First Ouside tick
// second outside next Tick
// Outside Promise
// File read
//Process next tick inside fs
// Again Inside the process next Tick
// Inner most next Tick
// Promise Inside the inner most tick
// file read inside next tick
// set immediate

const fs = require("fs");

fs.readFile("../file.txt", "utf-8", () => {
  console.log("File read");
  process.nextTick(() => {
    console.log("Process next tick inside fs");
    process.nextTick(() => {
      console.log("Again Inside the process next Tick");
      process.nextTick(() => {
        console.log("Inner most next Tick");
        Promise.resolve("Promise Inside the inner most tick").then(console.log);
      });
    });
  });
});

setImmediate(() => console.log("Set Immediate"));

process.nextTick(() => {
  console.log("First Outside tick");
});

Promise.resolve("Outside Promise").then(console.log);

process.nextTick(() => {
  fs.readFile("./inside.txt", () => {
    console.log("file read inside next tick");
  });
  console.log("second outside next Tick");
});

//IIFE Function
(function (a, b) {
  console.log(a + b);
})(5, 10);
