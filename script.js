let btn = document.getElementById("switch");
let svg = document.querySelector('.svg');
let path = document.querySelector('.path');
let group = document.querySelector('g');

let theme = localStorage.getItem("theme");
console.log(theme);

if (theme === "dark") {
    localStorage.setItem("theme", "dark");
    document.querySelector("body").setAttribute("data-theme", "dark");
    svg.setAttribute("stroke", "#fff");
    group.style.display = "block";
    path.style.display = "none";
    theme = "light";
} else {
    localStorage.setItem("theme", "light");
    document.querySelector("body").removeAttribute("data-theme", "dark");
    svg.setAttribute("stroke", "#212121");
    group.style.display = "none";
    path.style.display = "block";
    theme = "dark";
}

btn.addEventListener('click', ()=> {
    if (theme === "dark") {
        localStorage.setItem("theme", "dark");
        document.querySelector("body").setAttribute("data-theme", "dark");
        svg.setAttribute("stroke", "#fff");
        group.style.display = "block";
        path.style.display = "none";
        theme = "light";
    } else {
        localStorage.setItem("theme", "light");
        document.querySelector("body").removeAttribute("data-theme", "dark");
        svg.setAttribute("stroke", "#212121");
        group.style.display = "none";
        path.style.display = "block";
        theme = "dark";
    }
})


if (theme === "undefined") {
    theme = "light";
}