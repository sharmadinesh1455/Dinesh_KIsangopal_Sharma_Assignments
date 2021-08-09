function translate()
{
    var str= document.getElementById("string");
    var arr = [];
    arr = str.split(" ");

    document.getElementById("translate").innerHTML= arr;
}

var submit = document.getElementById("submit");

submit.onclick= function()
{
    translate();
}