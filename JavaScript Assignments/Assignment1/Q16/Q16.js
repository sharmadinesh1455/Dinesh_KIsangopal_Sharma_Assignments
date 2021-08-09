function createTable()
{
    var r= document.getElementById("row").value;
    var c= document.getElementById("col").value;

    var i,j;
    for(i=0; i<r; i++)
    {
        var x=document.getElementById("my-table").insertRow(i);
        for(j=0; j<c; j++)
        {
            var y=  x.insertCell(j);
            y.innerHTML="Row-"+i+" Column-"+j; 
        }
        
    }

}

var submit = document.getElementById("submit");

submit.onclick= function()
{
    createTable();
}