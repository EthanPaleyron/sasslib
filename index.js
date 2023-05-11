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
let isDark = true;

darkMode.addEventListener('click', () => {
    if (isDark) {
        document.body.dataset["theme"] = "dark";
        isDark = false;
    } else {
        document.body.dataset["theme"] = "light";
        isDark = true;
    }
})