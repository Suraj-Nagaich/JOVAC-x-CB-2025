Reduce :

const arr =[5,1,2,7,4]

let ans =0;

for (let i =0;i<arr.length;i++){
    ans+=arr[i];
}

console.log(ans);

function sumOfArr(arr){
    let sum =0;
    for (let i =0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

let arr = [4,6,2,3,1]
console.log(sumOfArr(arr));


REDUCE SYNTAX

let arr = [4,6,2,3,1]

const output = arr.reduce(function(acc,curr){
    acc = acc+curr;
    return acc;
},0)

console.log(output);


const output = arr.reduce(function(acc,curr){
    if(curr>acc){
        acc=curr;
    }
    return acc;
},0)

console.log(output);


//////////////////////////////////////////////////////////////////////////////////


Object:

const users = [
    {
        firstName: "Pratiyush",
        lastName: "Ray",
        age: 25
    },
    {
        firstName: "Yateesh",
        lastName: "Gangwar",
        age: 19
    },
    {
        firstName: "Suraj",
        lastName: "Nagaich",
        age: 20
    
    },
     {
        firstName: "Ambika",
        lastName: "Mishra",
        age: 18
    
    },
        {
        firstName: "Tanmay",
        lastName: "Kumar",
        age: 22
    
    }


]

console.log(users[0][0]);

Let's Get full name of Users

const output = users.map(user => user.firstName + " " + user.lastName);

console.log(output);
console.log(output[0]);


Let get average age of users:

const output2 = users.reduce(function(acc,curr){
    acc = acc+curr.age
    return acc
},0)

console.log(output2);

const outputFilter = users.filter (user => user.age <20).map((namee)=> namee.lastName);

console.log(outputFilter);

const finalResult = outputFilter.map((namee)=> namee.firstName);

console.log(finalResult);



/////////////////////////////////////////////////////////////////


PROMISES == WAADA

const cart =["shoes", "watches", "pants", "glasses", "deodrants", "shirt"]

CALLBACK
createOrder(cart, function(orderId){
    proceedToPayment(orderId, function (paymentInfo){
        showOrderSummary(paymentInfo, function (){
            updateWallet();
        });
    });
});


//Promises

createOrder(cart)
    .then(function (orderId){
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo){
        return showOrderSummary(paymentInfo);
    })
    .then(function(paymentInfo){
        return updateWalletBalance(paymentInfo);
    })


lETS CREATE PROMISE

function createOrder(cart){
    let orderId = "1234"
    console.log(orderId);
    console.log(cart);
}

const promise = createOrder(cart);


console.log(promise);

promise.then(function (orderId){
    console.log(orderId);
}).catch(function (err){
    console.log(err.message);
})

const myPromise = new Promise((resolve, reject) => {
    resolve("Promise Resolved")
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 3000);
});

console.log(myPromise);

const myPromise2 = new Promise((resolve, reject) => {
    // resolve("Promise Resolved")
  setTimeout(() => {
    resolve("Promise Rejected");
  }, 3000);
});

console.log(myPromise2);
myPromise2.then(function (){
    console.log("THEN ACTIVATED")
}).then(function (){
    console.log("ONE MORE THEN 1")
}).then(function (){
    console.log("ONE MORE THEN 2")
}).then(function (){
    console.log("ONE MORE THEN 3")
}).then(function (){
    console.log("ONE MORE THEN 4")
})
.catch(function (err){
    console.log(err);
});

Promise Apis:

// Promise.all() 


const p1 = new Promise(function (resolve,reject){
    setTimeout(()=>{
        reject("P1 reject");
    },1000)
});

const p2 = new Promise(function (resolve,reject){
    setTimeout(()=>{
        reject("P2 reject");
    },1000)
});

const p3 = new Promise(function (resolve,reject){
    setTimeout(()=>{
        resolve("P3 Resolve");
    },4000)
});

Promise.all([p1,p2,p3])
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })


PROMISE . ALL SETTLED


Promise.allSettled([p1,p2,p3])
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })


Promise . race 

Promise.race([p1,p2,p3])
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })


PRomise . any

Promise.any([p1,p2,p3])
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
