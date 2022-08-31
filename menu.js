const menuMobile = document.getElementById("menu-mobile");
const navMobile = document.getElementById("nav-mobile")


const Menu = () => {
    const showMenu = () => {
        navMobile.classList.toggle("hidden")
    };
    menuMobile.addEventListener("click", showMenu);
};
export default Menu;