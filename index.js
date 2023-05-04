// 🔴SWITCH IMG

// 🔵burger Menu
const switchBurgerMenu = document.querySelector('.switchBurgerMenu');
let boolBurgerMenu = true;

switchBurgerMenu.addEventListener('click', () => {
    if (boolBurgerMenu) {
        switchBurgerMenu.style.backgroundImage = "url(../img/main/xmark.svg)";
        boolBurgerMenu = false;
    } else {
        switchBurgerMenu.style.backgroundImage = "url(../img/main/burger-menu.svg)";
        boolBurgerMenu = true;
    }
})

// 🔵Dark Mode
const switchDarkMode = document.querySelector('.switchDarkMode');
let boolDarkMode = true;

switchDarkMode.addEventListener('click', () => {
    if (boolDarkMode) {
        switchDarkMode.style.backgroundImage = "url(../img/main/circle-light.svg)";
        boolDarkMode = false;
    } else {
        switchDarkMode.style.backgroundImage = "url(../img/main/circle-dark.svg)";
        boolDarkMode = true;
    }
})


// 🔴MAIN

// 🔵Burger Menu


// 🔵Dark Mode
const darkMode = document.getElementById('darkMode');
const grayscale = document.getElementsByClassName('grayscale');
let boolDarkLight = true;

darkMode.addEventListener('click', () => {
    if (boolDarkLight) {
        document.body.dataset["theme"] = "dark";
        boolDarkLight = false;
    } else {
        document.body.dataset["theme"] = "light";
        boolDarkLight = true;
    }
})

const burgerMenu = document.getElementById('burgerMenu');

// burgerMenu.addEventListener('click', () => {

// })