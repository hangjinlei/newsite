window.onload = function() {
    document.title += " - 金雷 杭";
    setContent();
    setCopyright();
    setTitle();
    setMars();
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
    content.style.height = innerHeight - 100 + "px";
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

function setCopyright() {
    var copyright = document.getElementById("copyright");
    var copy = "Copyright © " + new Date().getFullYear() + " 杭金雷";
    copyright.innerHTML = copy;
    copyright.setAttribute("title", copy);
}

function setTitle() {
    document.getElementById("openMenu").setAttribute("title", "导航");
    document.getElementById("title").setAttribute("title", "金雷 杭");
    document.getElementById("headpic").setAttribute("title", "金雷 杭");
}

(function() {
    function formatTwoDigits(s) {
        if (s < 10) return "0" + s;
        return s;
    };
    setInterval(() => {
        var nowTime = document.getElementById("nowTime");
        var sWeek = ["日", "一", "二", "三", "四", "五", "六"];
        var myDate = new Date(); // 当天的日期
        var sYear = myDate.getFullYear(); // 年
        var sMonth = myDate.getMonth() + 1; // 月
        var sDate = myDate.getDate(); // 日
        var sDay = sWeek[myDate.getDay()]; // 星期
        var sHours = myDate.getHours(); // 时
        var sMinutes = myDate.getMinutes(); // 分
        var sSeconds = myDate.getSeconds(); // 秒

        var time = sYear + "年" + sMonth + "月" + sDate + "日" + " 星期" + sDay + " " + formatTwoDigits(sHours) + ":" + formatTwoDigits(sMinutes) + ":" + formatTwoDigits(sSeconds);
        nowTime.innerHTML = time
        nowTime.setAttribute("title", time);
    }, 500);
}());