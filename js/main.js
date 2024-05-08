// Document object model
/*
const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
view2.style.display = "none";

/*
const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = document.getElementsByTagName("div");
console.log(divs);

const sameDivs = document.querySelectorAll("div");
console.log(sameDivs);*/
/*
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);  

for( i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "orange";
    evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px";
}

const navText = document.querySelector("nav h1");
console.log(navText)
navText.textContent = "Hello World!";

const nav = document.querySelector("nav");
nav.innerHTML = `<h1>Hello!<h1/>`;
console.log(nav); */

// DOM - document object model;

const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);

const views = document.getElementsByClassName("view");
console.log(views);
const viewsAgain = document.querySelectorAll(".view");
console.log(viewsAgain);
// now selecting on previous results
const divs = view1.querySelectorAll("div");
console.log(divs);

const divsAgain = view1.getElementsByTagName("div");
console.log(divsAgain);

// to select only even divs 
/*
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
// to select only odd divs
const oddDivs = view1.querySelectorAll("div:nth-of-type(2n+1)");
console.log(oddDivs); */ /*

for (i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "yellow";
    //evenDivs[i].style.width = "200px";
    //evenDivs[i].style.height = "200px";
} 
for ( i = 0; i < oddDivs.length; i++) {
    oddDivs[i].style.backgroundColor = "red";
    oddDivs[i].style.width = "200px";
    oddDivs[i].style.height = "200px";
} */
// we cannot select nav text from our previous results (i.e,, view1)
const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello";
const navBar = document.querySelector("nav");
// **** innerHTML *****
navBar.innerHTML = "<h1> Hello again! </h1> <p> this should align right </p>";
console.log(navBar);
navBar.style.justifyContent = "flex-between"; 

// DOM tree navigation
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
for (i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "green";
}
console.log(evenDivs[0])
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
//view2.style.margin = "1px";

//how to remove or rather method to remove node or element or everything

while (view2.lastChild) {
    view2.lastChild.remove();
}

// how to create node or element 
/*
const createDiv = (parent, iter) => {
    const newDiv = document.createElement("div");
    // this is very important
    newDiv.textContent = iter;
    newDiv.style.display = "flex";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.backgroundColor = "black";
    newDiv.style.margin = "10px";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    // last thing we need to append our newDiv to parent element
    parent.append(newDiv);
}
// to create only one div
//createDiv(view2, 10);
// to create multiple divs with one method using loop
for (i = 1; i <= 12; i++) {
    // call the function
    createDiv(view2, i);
}
*/
// another approach which I've tried idk if if works:)))
// I've figured it out it is working omg:)))

const createDiv = (parent, length) => {
    
    for ( i = 1; i <= length ; i++ ) {
        const newDiv = document.createElement("div");
        newDiv.textContent = i;
        newDiv.style.display = "flex";
        newDiv.style.backgroundColor = "black";
        newDiv.style.width = "100px";
        newDiv.style.height = "100px";
        newDiv.style.justifyContent = "center";
        newDiv.style.alignItems = "center";
        newDiv.style.margin = "10px";
        parent.append(newDiv);
    }
}

createDiv(view2, 12);

// you what here we don't need that iter at all :)))




