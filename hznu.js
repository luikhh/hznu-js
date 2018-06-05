// 每隔3秒无限循环执行，手动刷新页面停止
setInterval(function(){var script = document.createElement('script'); script.src = '//code.jquery.com/jquery-3.3.1.js'; document.body.appendChild(script); $('#iframeautoheight').contents().find('select').removeAttr("disabled").val("好"); $('#iframeautoheight').contents().find('select:last').removeAttr("disabled").val("较好"); $('#iframeautoheight').contents().find('#Button1').click()},3000);


// 每隔3秒循环，执行8次
for (var i=0; i<8; i++) {
    setTimeout(function(){var script = document.createElement('script'); script.src = '//code.jquery.com/jquery-3.3.1.js'; document.body.appendChild(script); $('#iframeautoheight').contents().find('select').removeAttr("disabled").val("好"); $('#iframeautoheight').contents().find('select:last').removeAttr("disabled").val("较好"); $('#iframeautoheight').contents().find('#Button1').click()},3000);
}

// 手动执行
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-3.3.1.js';
document.body.appendChild(script);
$('#iframeautoheight').contents().find('select').removeAttr("disabled").val("好");
$('#iframeautoheight').contents().find('select:last').removeAttr("disabled").val("较好");
$('#iframeautoheight').contents().find('#Button1').click()


$('#iframeautoheight').contents().find('select:first').removeAttr("disabled").val("较好");



for (var i=1; i<100; i+=3) {
    document.getElementsByTagName("label")[i].click();
}

document.getElementsByClassName("submitbutton")[0].click();
