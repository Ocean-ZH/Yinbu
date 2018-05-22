/*
    返回前天，昨天，今天，明天，后天日期
    返回格式：2017-07-09 09:12:02
    调用方法：今天：GetDateStr(0);昨天：GetDateTimeStr(-1);明天：GetDateTimeStr(1)
*/
function GetDateTimeStr(AddDayCount) {
    var AddDayCount = AddDayCount || 0;
    var SystemTime = new Date();
    SystemTime.setDate(SystemTime.getDate() + AddDayCount);//获取AddDayCount天后的日期
    var y = SystemTime.getFullYear();
    var m = ("0" + (SystemTime.getMonth() + 1)).slice(-2);//获取当前月份的日期
    var d = ("0" + SystemTime.getDate()).slice(-2);
    var hours = ("0" + SystemTime.getHours()).slice(-2);
    var minutes = ("0" + SystemTime.getMinutes()).slice(-2);
    var seconds = ("0" + SystemTime.getSeconds()).slice(-2);
    return y + "-" + m + "-" + d + " " + hours + ":" + minutes + ":" + seconds;
}

Zepto(document).ready(function ($) {

});//jQuery