alert("HELLO AND WELCOME");

var rel = document.getElementById("answer");
var bin = document.getElementById("binary");
var btn = document.getElementById("validate");
var btn1 = document.getElementById("delete");
var nb = document.getElementById("number1");
var nb1 = document.getElementById("number2");
var decim = document.getElementById("decimal");
var inputs = document.querySelectorAll("input");
decim.readOnly = false;
nb.readOnly = false;
nb1.readOnly = false;
function buttonAvailable()
{
    var n  = document.getElementById("number1");
    var n1 = document.getElementById("number2");
    var selector =  document.getElementById("selection");

    var number1 = parseInt(n.value);
    var number2 = parseInt(n1.value);
    var sel = selector.value;

    if(!isNaN(number1) && !isNaN(number2))
    {
        btn.style.backgroundColor = "green";
        btn1.style.backgroundColor = "red";
        btn.disabled = false;
        btn1.disabled = false;

    }

    else
    {
        btn1.disabled = true;
        btn.disabled = true;
        btn.style.backgroundColor = "grey";
        btn1.style.backgroundColor = "grey";
    }
}



function choice()
{
    var selector =  document.getElementById("selection");

    var sel = selector.value;

    var number3 = parseInt(document.getElementById("number1").value);
    var number4 = parseInt(document.getElementById("number2").value);

    switch (sel)
    {
        case "addition":
            rel.disabled = false;
            rel.value = number3 + number4;
            break;
        case "substraction":
            rel.disabled = false;
            rel.value = number3 - number4;
            break;
        case "multiplication":
            rel.disabled = false;
            rel.value = number3 * number4;
            break;
        case "division":
            rel.disabled = false;
            rel.value = number3 / number4;
            break;
        case "modulo":
            rel.disabled = false;
            rel.value = number3 % number4;
            break;
    }

}

function binary()
{

    var number = document.getElementById("decimal");
    var numb = parseInt(number.value);


    if (!isNaN(numb))
    {
        bin.disabled = false;
        btn1.disabled = false;
        nb.readOnly = true;
        nb1.readOnly = true;
        btn1.style.backgroundColor = "red";
        bin.value = numb.toString(2);
    }

    else
    {
        btn1.disabled = true;
        bin.disabled = true;
    }

}

function verification()
{
    var number = document.getElementById("decimal");
    var numb = parseInt(number.value);
    if (numb.value !== null)
    {
        decim.readOnly = true;
    }
}

btn1.addEventListener("click", () =>
{
    inputs.forEach(input => input.value = "");
    rel.disabled = true;
    btn.disabled = true;
    btn1.disabled = true;
    bin.disabled = true;
    decim.readOnly = false;
    nb.readOnly = false;
    nb1.readOnly = false;
    btn.style.backgroundColor = "grey";
    btn1.style.backgroundColor = "grey";
});

btn.addEventListener("click", choice);
