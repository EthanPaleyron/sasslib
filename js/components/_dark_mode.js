const darkMode = document.getElementById('darkMode');
let bool = true;

darkMode.addEventListener('click', () => {
    if (bool) {
        darkMode.innerHTML = "light";
        darkMode.style.color = "#000";
        darkMode.style.backgroundColor = "#EAEBEB";


        bool = false;
    } else {
        darkMode.innerHTML = "dark";
        darkMode.style.color = "#fff";
        darkMode.style.backgroundColor = "#2D3142";
        bool = true;
    }
})