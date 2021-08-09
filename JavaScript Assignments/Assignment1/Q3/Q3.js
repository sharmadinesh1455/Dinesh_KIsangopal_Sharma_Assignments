function EvenOdd()
{
    var n;
    n = document.getElementById("first_num").value;
    
    if(n%2==0)
    {
        document.getElementById("num").innerHTML=n + " is Even";
    }
    else
    {
        document.getElementById("num").innerHTML=n +" is Odd";
    }

   

}

var submit = document.getElementById("answer");

submit.onclick = function()
{
    EvenOdd();
}