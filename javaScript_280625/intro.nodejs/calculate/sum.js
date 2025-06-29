console.log("THIS IS MY SUM MODULE")
var myName = "Suraj"
function sumOfTwoNumbers(x,y){
    const sum = x+y;
    console.log(sum);
}
module.exports = {
    myName: myName,
    sumOfTwoNumbers: sumOfTwoNumbers
}

// MJS 

console.log("I AM MJS MODULE");

var name = "Suraj"

export function calculateSum(xx,yy){
    var ans = xx+yy;
    console.log(ans);
}
