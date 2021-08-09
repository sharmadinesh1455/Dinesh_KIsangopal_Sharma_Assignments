function convert(dollar)
{

    var Indian_currency = dollar * 74.28;
    var Japanese_currency = dollar *109.14;
    var pound_currency = dollar * 0.72;
    var Euro = dollar * 0.84;


    document.getElementById("num").innerHTML = "INDIAN RUPPE-->"+Indian_currency+"<br>"+"JAPANESE YEN -->"+Japanese_currency+"<br>"+" EURO -->"+Euro+"<br>"+" POUND--> "+pound_currency;
}

var submit= document.getElementById("submit");


submit.onclick = function(){

    var dollar = parseInt( document.getElementById("currency").value);
    convert(dollar);
}