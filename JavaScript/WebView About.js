/*This js file belong to webview app build by DROID_MJ. Any copyright of this file are not autorized unless you have a license from the developer.You can get one by contacting me in facebook [https://m.me/mrepol742]*/
/*You agree to not decompile or change anything without license from the developer*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}