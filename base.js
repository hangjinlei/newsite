window.onload = function() {
    document.title += " - 金雷 杭";
    setContent();
    setCopyright();
    setTitle();
    setInnerHTML();
    // setMars();
}

window.onresize = function() {
    setContent();
    // setMars()
}

function menu() {
    var menu = document.getElementById("menu");
    var mask = document.getElementById("mask");
    if (menu.className == "menu")
        showMenuList(menu, mask);
    else
        hideMenuList(menu, mask);
}

function setContent() {
    var content = document.getElementById("content");
    var innerHeight = window.innerHeight;
    content.style.height = innerHeight - 100 + "px";
}

function showMenuList(menu, mask) {
    menu.className = "menu show";
    mask.className = "mask show";
}

function hideMenuList(menu, mask) {
    var menu = document.getElementById("menu");
    var mask = document.getElementById("mask");
    var rightContextMenu = document.getElementById("rightContextMenu");
    menu.className = "menu";
    mask.className = "mask";
    rightContextMenu.className = "rightContextMenu";
}

function setMars() {
    var Mars = document.getElementById("Mars");
    Mars.style.height = Mars.scrollHeight;
}

function setCopyright() {
    var copyright = document.getElementById("copyright");
    var copy = "Copyright &copy; " + new Date().getFullYear() + " 金雷 杭";
    copyright.innerHTML = copy;
    copyright.setAttribute("title", copy);
}

function setTitle() {
    document.getElementById("openMenu").setAttribute("title", "Launcher");
    document.getElementById("hideMenu").setAttribute("title", "Launcher");
    document.getElementById("title").setAttribute("title", "金雷 杭");
    document.getElementById("headpic").setAttribute("title", "金雷 杭");
}

function setInnerHTML() {
    var d = document.getElementById("title"); //.setAttribute("title", "Launcher");
    d.innerHTML = "金雷 杭";
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