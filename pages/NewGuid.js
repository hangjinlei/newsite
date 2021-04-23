window.onload = function() {
    setContent();
    var myEmail = ["@gmail.com", "@live.com", "@outlook.com", "@qq.com"];
    for (var i = 1; i <= 4; i++) {
        var id = document.getElementById(`Guid${i}`);
        id.style.backgroundColor = `#fff`;
        id.style.textTransform = "none";
        id.style.overflow = "auto";
        id.style.textOverflow = "unset";
        id.innerHTML = NewGuid().replaceAll(" - ", "") + myEmail[i - 1];
    }
}

function setTitle() {
    document.getElementById("openMenu").setAttribute("title", "Launcher");
    document.getElementById("hideMenu").setAttribute("title", "Launcher");
    document.getElementById("title").setAttribute("title", "金雷 杭");
    document.getElementById("headpic").setAttribute("title", "金雷 杭");
}

function setContent() {
    var content = document.getElementById("content");
    var innerHeight = window.innerHeight;
    content.style.height = innerHeight - 100 + "px";
}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function NewGuid() {
    return (S4() + S4() + " - " + S4() + " - " + S4() + " - " + S4() + " - " + S4() + S4() + S4());
}