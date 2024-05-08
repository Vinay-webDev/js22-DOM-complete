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
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
// to select only odd divs
const oddDivs = view1.querySelectorAll("div:nth-of-type(2n+1)");
console.log(oddDivs);

for (i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "yellow";
    /*evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px";*/
}
for ( i = 0; i < oddDivs.length; i++) {
    oddDivs[i].style.backgroundColor = "red";
    oddDivs[i].style.width = "200px";
    oddDivs[i].style.height = "200px";
}
// we cannot select nav text from our previous results (i.e,, view1)
const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello";
const navBar = document.querySelector("nav");
// **** innerHTML *****
navBar.innerHTML = "<h1> Hello again! </h1> <p> this should align right </p>";
console.log(navBar);
navBar.style.justifyContent = "flex-between";














