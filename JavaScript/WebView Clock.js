/*This html file belong to webview app build by DROID_MJ. Any copyright of this file are not autorized unless you have a license from the developer.You can get one by contacting me in facebook [https://m.me/mrepol742]*/
/*You agree to not decompile or change anything without license from the developer*/
window.onload = function() {
var clock = document.getElementById("time");
var hexColor = document.getElementById("hexColor");

function hexclock() {
var time = new Date();
var hours = time.getHours().toString();
var minutes = time.getMinutes().toString();
var seconds = time.getSeconds().toString();

if(hours > 12) {
hours = (hours % 12).toString();
}

if(hours.length < 2) {
hours = '0' + hours;
}
if(minutes.length < 2) {
minutes = '0' + minutes;
}
if(seconds.length < 2) {
seconds = '0' + seconds;
}

var clockStr = hours + ':' + minutes + '.' + seconds;
var hexClr = "#" + hours + minutes + seconds;

clock.textContent = clockStr;
hexColor.textContent = hexClr;

document.body.style.backgroundColor = hexClr;
}

hexclock();
setInterval(hexclock, 1000);
}