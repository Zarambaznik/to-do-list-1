// create a "close" button and append it to each list item
let myToDoList = document.getElementsByTagName('LI');
let i;

for (i = 0; i < myToDoList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myToDoLIst[i].appenChild(span);
}