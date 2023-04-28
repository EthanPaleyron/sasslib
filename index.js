// 🔴Dark Mode
const darkMode = document.getElementById('darkMode');
let bool = true;

darkMode.addEventListener('click', () => {
    if (bool) {
        document.body.dataset["theme"] = "dark";
        darkMode.src = "./img/logo/circle-light.svg"
        bool = false;
    } else {
        document.body.dataset["theme"] = "light";
        darkMode.src = "./img/logo/circle-dark.svg"
        bool = true;
    }
})

// 🔴Switch Img
const switchImg = document.querySelector('.switchImg');
let b = true;

switchImg.addEventListener('click', () => {
    if (b) {
        switchImg.src = "./img/logo/circle-light.svg";
        b = false;
    } else {
        switchImg.src = "./img/logo/circle-dark.svg";
        b = true;
    }
})