// Document object model
const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
view2.style.display = "flex";

/*
const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = document.getElementsByTagName("div");
console.log(divs);

const sameDivs = document.querySelectorAll("div");
console.log(sameDivs);
*/
const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);











