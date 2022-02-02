function menu_popup() {
    let menu = document.getElementById("topnav-links");
    if (menu.className == "menu-hidden"){
        menu.classList.remove("menu-hidden");
        menu.classList.add("menu-show");
    }
    else{
        menu.classList.remove("menu-show");
        menu.classList.add("menu-hidden");
    }
}