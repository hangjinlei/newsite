window.onload = function() {
    document.title += " - 杭金雷";
    setContent();
}

window.onresize = function() {
    setContent();
}

function menu() {
    if (window.innerWidth < 200) {
        alert("屏幕尺寸过窄，菜单可能无法完全显示!");
        return;
    }
    var List = document.getElementById("menuList");
    var Icon = document.getElementById("menuIcon");
    if (List.className == "menuList")
        showMenuList(List, Icon);
    else
        hideMenuList(List, Icon);
}

function setContent() {
    var content = document.getElementById("content");
    var innerHeight = window.innerHeight;
    content.style.height = innerHeight - 50 + "px";
}

function showMenuList(List, Icon) {
    List.className = "menuList show";
    Icon.className = "menuIcon down";
}

function hideMenuList(List, Icon) {
    var List = document.getElementById("menuList");
    var Icon = document.getElementById("menuIcon");
    List.className = "menuList";
    Icon.className = "menuIcon";
}