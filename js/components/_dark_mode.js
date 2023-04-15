const darkMode = document.getElementById('darkMode');
let bool = true;

darkMode.addEventListener('click', (colorButtonDark, colorButtonLight) => {
    colorButtonLight = "#EAEBEB";
    colorButtonDark = "#2D3142";

    if (bool) {
        document.body.dataset["theme"] = "dark";
        darkMode.innerHTML = "light";
        darkMode.style.color = "#000";
        darkMode.style.backgroundColor = colorButtonLight;
        bool = false;
    } else {
        document.body.dataset["theme"] = "light";
        darkMode.innerHTML = "dark";
        darkMode.style.color = "#fff";
        darkMode.style.backgroundColor = colorButtonDark;
        bool = true;
    }
})