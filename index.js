// 🔴Dark Mode
const darkMode = document.getElementById('darkMode');
const grayscale = document.getElementsByClassName('grayscale');
let bool = true;

darkMode.addEventListener('click', () => {
    if (bool) {
        document.body.dataset["theme"] = "dark";
        bool = false;
    } else {
        document.body.dataset["theme"] = "light";
        bool = true;
    }
})


// 🔴Switch Img
const switchImg = document.querySelector('.switchImg');
let b = true;

switchImg.addEventListener('click', () => {
    if (b) {
        switchImg.src = "../img/main/circle-light.svg";
        b = false;
    } else {
        switchImg.src = "../img/main/circle-dark.svg";
        b = true;
    }
})