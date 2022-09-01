const btn = document.getElementById("dark-mode");
const body = document.querySelector("body");
const title = document.querySelectorAll("h1");

const darkMode = () => {
    body.classList.toggle("bg-black");    
    body.classList.toggle("text-white");
    title.forEach((value) => {
        value.classList.toggle("bg-red-500")
    });
};

btn.addEventListener("click", darkMode);