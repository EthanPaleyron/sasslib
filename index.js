// 🔴SWITCH IMG

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