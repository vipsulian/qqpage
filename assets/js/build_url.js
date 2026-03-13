function build_url(){
    var urlValue = document.querySelector('#url').value;
    var url = encodeURI(decodeURI(urlValue));
    if (url === "" || url.indexOf("http") === -1){
        document.getElementById("b_url").innerHTML=`输入的不是链接或者未加http请求头！`;
        document.getElementById("qrcode").innerHTML="";
    }
    else {
        var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        if (!baseUrl.endsWith('/')) {
            baseUrl = baseUrl.substring(0, baseUrl.lastIndexOf('/') + 1);
        }
        var finalUrl = baseUrl + "api/?url=" + url;
        document.getElementById("b_url").innerHTML=`<a href=${finalUrl} target='_blank'>${finalUrl}</a>`;
        
        // 生成二维码
        document.getElementById("qrcode").innerHTML="";
        new QRCode(document.getElementById("qrcode"), {
            text: finalUrl,
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
}
