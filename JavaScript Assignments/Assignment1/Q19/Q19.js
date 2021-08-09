function calc()
{
    var a = parseINT(document.getElementById("first").value);
    var b = parseINT(document.getElementById("second").value);

    var add = document.getElementById("add");
    var sub = document.getElementById("sub");
    var mul = document.getElementById("mul");
    var div = document.getElementById("div");

    add.onclick= function() 
    {
        var res= a+b;
        document.getElementById("result").innerHTML= "Result :"+ res;
    }

    sub.onclick= function()
    {
        var res= a-b;
        document.getElementById("result").innerHTML= "Result :"+ res;
    }

    mul.onclick= function()
    {
        var res= a*b;
        document.getElementById("result").innerHTML= "Result :"+ res;
    }
    div.onclick= function()
    {
        var res= a/b;
        document.getElementById("result").innerHTML= "Result :"+ res;
    }
}

var submit = document.getElementById("submit");
submit.onclick = function()
{
    calc();
}