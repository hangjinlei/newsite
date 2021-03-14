var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
            info.innerHTML = xhr.responseText;
        }
    }
};

// 每次需要发请求需要做两步：
// xhr.open("get", 'https://node.kg.qq.com/cgi/fcgi-bin/kg_ugc_get_homepage?type=get_uinfo&start=1&num=15&share_uid=639a9980272b3282', true);
// xhr.send(null);
xhr.open("get", 'https://node.kg.qq.com/cgi/fcgi-bin/kg_ugc_get_homepage?type=get_uinfo&start=1&num=15&share_uid=639a9980272b3282');
xhr.send();