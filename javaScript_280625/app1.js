
// MAIN FILE

console.log("THIS IS MY FILE");

const { myName, sumOfTwoNumbers } = require("./sum.js");


console.log(myName)

console.log(obj.myName)
obj.sumOfTwoNumbers(5,3);

var a = 300;
console.log(a);


//////////////////////////////////////

//MJS

import { calculateSum } from "./sum.js";

calculateSum(10,20);

console.log(module.exports);


INCREASE READABLITIY

THERE IS NO NEED TO IMPORT EVERY SINGLE FILE

const { myName, multiplyOfTwoNumbers,subOfTwoNumbers, sumOfTwoNumbers}= require("./calculate");

console.log(myName);

multiplyOfTwoNumbers(2,3);
subOfTwoNumbers(5,2);
sumOfTwoNumbers(10,20);
