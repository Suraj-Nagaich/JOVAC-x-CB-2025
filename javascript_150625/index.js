 var s1 = "Rishabh";
 console.log(s1);
 var s1 ="Ayush";
 console.log(s1);

 let s2 = "Suraj";
 console.log(s2);
 let s2 = "Piyush";
 console.log(s2);

 s2 ="Adit";
 console.log(s2);

 const s3 ="Pranshu";

 console.log(s3);

 const s3 = "Dev"

 console.log(s3);


 s3 = "Animesh";

 console.log(s3)


 var s1 ="Piyush";

 let s1 = "Animesh";

 console.log(s1);


 var a1 = 100;

 console.log(a1);

 function sumOfTwo(num1,num2){
     let ans = num1+num2;
     return ans;
}

 let sumOfTwoBy = sumOfTwo(2,3);
 console.log(sumOfTwoBy);

 console.log(a1);

 var a2 = 20;
 console.log(a2);

 console.log(a1);

 var a1 = 20;

 console.log(a1);

console.log(a2);




 console.log(x);

 getName();

 let a2 = 30;

 console.log(a2);

 var x =10;

 function getName(){
     console.log("HELO");
 };

 var glaStudent = () =>{
     console.log("I AM GLA STUDENT")
 }

 console.log(glaStudent);

 console.log(glaStudent());

 glaStudent();


 var xyz =20;

 xyz();

****LEXICAL SCOPE


function a(){
    var x =10;
    console.log(x);
    // console.log(y);
    // var y =3000;
    b();
    function b(){
        var y =20;
        console.log(y);
        c();
        function c(){
            var z =30;
            console.log(z);
            console.log(y);
            console.log(x);
        }
    }
}

a();

let a2 = 30;

console.log(a2);

var a =10;

function aGetName(){
    console.log("HELO");
};

var aGlaStudent = () =>{
    console.log("I AM GLA STUDENT")
}

aGetName();

aGlaStudent();


var a = 20;

console.log(a);

function aCall(){
    var aa =10;
    var bb = 20;
    console.log("Answer: ",aa+bb);
}

aCall();

var a = 4000;

{
    var a =100;
    var b =200;
    var c =300;
}

console.log(a);
console.log(b);
console.log(c);


////////////////////////////////////////////////////////////

**** CLOSURES IN JS 

function a(){
    var x =7;
    var y =6;
    function b(){
        var y =8;
        console.log(y);
    }
    y =10;
    b();

}
a();


function x(){
    var a =7;
    function y(){
        console.log(a);
    }
    a =100;
    return y;
}

var z =x();
console.log(z);

z();


CASE 3: CLOSURE:

function z(){
    var b =900;

    function x(){
        var a = 7;

        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();


////////////////////////////////////

****SETTIMEOUT

setTimeout(()=>{
    console.log("Hello I am setTimeout Function i'll after 2 secs");
},6000);


****SETINTERVAL

setInterval(()=>{
    console.log("Hello I am setInterval function i'll run after 2 secs");
},2000)


**** FORLOOP


for (var i = 0; i <= 4; i++) {
    function closuress(i) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000)
    }
    closuress(i);
}

****JS IS SINGLE THREADED OR NOT

console.log("HELLO");

setTimeout(()=>{
    console.log("I AM SET TIMEOUT");
},2000);

function x(y){
    console.log("I AM X");
    y()
}

x(function (){
    console.log("I AM Y: ANONYMOUS")
});

console.log("BYE");


 *****EVENT LISTENERS

document.getElementById("functionCall").addEventListener("click",function abc(){
    console.log("EVENT HAPPENED!!")
})
