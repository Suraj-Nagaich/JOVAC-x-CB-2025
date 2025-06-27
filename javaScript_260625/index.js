
// EVENT DELEGATION IN JS

const menuItem = document.getElementById("menuItems");

menuItem.addEventListener("click",(event)=>{
    if(event.target.tagName === "LI"){
        console.log("Clicked On:",event.target.textContent);
    }
});

// //I WANT TO ADD SOME DYNAMIC ELEMENTS

const newItem = document.createElement('li');
newItem.textContent = "Login";

menuItem.append(newItem);

NORMAL EVENT LISTENING

const searchInput = document.getElementById("search");

function handleSearch(event){
    console.log("SEARCH FOR: EVENT TRIGGER")
}

LET's MAKE DEBOUNCING
  
function debounceFunction(func,delay){
    let timeoutId;
    return function(...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>{
            console.log("WORKING")
            func.apply(this, args);
        },delay)

    }
}

const debouncedSearchEvent = debounceFunction(handleSearch,1000);

const timeoutChecker = setTimeout(()=>{
    console.log("CLICKED INPUTS: ", handleSearch());
},)
searchInput.addEventListener("input",()=>{
    setTimeout(()=>{
    console.log("CLICKED INPUTS: ", handleSearch());
},1000)
});

// THROTTLING IN JAVASCRIPT

// window resize 

function throttle(func,limit){
    let lastCall =0;
    return function(...args){

        const now = Date.now();

        if(now - lastCall >= limit){
            lastCall =now;
            func.apply(this,args);
        }
    }
}
function handleResize(){
    console.log("RESIZING WINDOW: ",new Date().toString())
}
handleResize();
const throttleOnResizing = throttle(handleResize,2000);

window.addEventListener("resize",throttleOnResizing);



/// LOCAL STORAGE

localStorage.setItem("myCat", "Tom");
sessionStorage.setItem("myMouse", "Jerry");

// I want to remove:

localStorage.removeItem("myCat");

sessionStorage.clear();
