let navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";

}

function hideMenu(){
    navLinks.style.right = "-200px";
    
}

// let feature = document.getElementById("feature").addEventListener("click",function (){

//     window.location.href = "book.html";
// });

let feature = document.getElementById("feature");
function info(){
    window.location.href = "https://www.who.int/news-room/questions-and-answers/item/vaccines-and-immunization-what-is-vaccination";

}
function book(){
    window.location.href = "book.html";
}