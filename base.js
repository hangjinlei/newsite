window.onload = function() {
    document.title += " - 杭金雷";
    setContent();
    setMars()
}

window.onresize = function() {
    setContent();
    setMars()
}

function menu() {
    var menu = document.getElementById("menu");
    var openMenu = document.getElementById("openMenu");
    if (menu.className == "menu")
        showMenuList(menu, openMenu);
    else
        hideMenuList(menu, openMenu);
}

function setContent() {
    var content = document.getElementById("content");
    var innerHeight = window.innerHeight;
    content.style.height = innerHeight - 50 + "px";
}

function showMenuList(menu, openMenu) {
    menu.className = "menu show";
    openMenu.className = "openMenu down";
}

function hideMenuList(menu, openMenu) {
    var menu = document.getElementById("menu");
    var openMenu = document.getElementById("openMenu");
    menu.className = "menu";
    openMenu.className = "openMenu";
}

function setMars() {
    var Mars = document.getElementById("Mars");
    Mars.style.height = Mars.scrollHeight;
}