/*
Name: Rachel Wait
File name: Java script
Date: September 18, 2023
*/

//Hamburger menu function
function hamburger () {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}