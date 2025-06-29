console.log("I AM MJS MODULE");

var name = "Suraj"

export function calculateSub(xx,yy){
    var ans = xx-yy;
    console.log(ans);
}
function subOfTwoNumbers(x,y){
    const sum = x+y;
    console.log(sum);
}
module.exports = {
    subOfTwoNumbers: subOfTwoNumbers
}
