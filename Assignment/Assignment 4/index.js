
const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById("child");


//// EVENT CAPTURING






grandparent.addEventListener('click', () => {
    console.log("GRANDPARENT DIV CLICKED");
}, true);

parent.addEventListener("click", () => {
    console.log("PARENT DIV CLICKED");
}, true);

child.addEventListener("click", () => {
    console.log("CHILD DIV CLICKED");
}, true);




////  EVENT BUBBLING



grandparent.addEventListener('click', (e) => {
    if (e.target === grandparent) {
        console.log("GRANDPARENT DIV CLICKED");
    }
}, true); 

grandparent.addEventListener('click', (e) => {
    if (e.target === grandparent) {
        console.log("PARENT DIV CLICKED");
    }
}, true);
grandparent.addEventListener('click', (e) => {
    if (e.target === grandparent) {
        console.log("CHILD DIV CLICKED");
    }
}, true); 


parent.addEventListener('click', (e) => {
    if (e.target === parent) {
        console.log("PARENT DIV CLICKED");
    }
}, true); 

parent.addEventListener('click', (e) => {
    if (e.target === parent) {
        console.log("CHILD DIV CLICKED");
    }
}, true); 

child.addEventListener('click', (e) => {
    if (e.target === child) {
        console.log("CHILD DIV CLICKED");
    }
}, true);
