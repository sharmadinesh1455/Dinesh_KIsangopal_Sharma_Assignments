function sum()
{
    var n;
    var sum = 0;
    var i=0;

    n = document.getElementById("first_num").value;
    
    for(i=0; i<=n; i++)
    {
        if(i%3==0 || i%5==0)
        {
            sum +=i;
        }
    }
    document.getElementById("num").innerHTML="Sum of "+n+ " numbers including only multiple of 3 & 5 is :"+sum;

}

var submit = document.getElementById("answer");

submit.onclick = function()
{
    sum();
}