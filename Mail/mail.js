alert("BIENVENUE");

var ml = document.getElementById("email");
var pr = document.getElementById("prenom");
var nm = document.getElementById("nom");
var b = document.getElementById("bouton");
var b2 = document.getElementById("bouton2");
var inputs = document.querySelectorAll("input");
var labels = document.querySelectorAll("label");

b.style.backgroundColor = "grey";
b2.style.backgroundColor = "grey";


function generateAvailable()
{
    if (pr.value.trim()!== "" && nm.value.trim() !== "")
    {
        b.disabled = false;
        b.style.backgroundColor = "green";
    }

    else
    {
        b.disabled = true;
        b.style.backgroundColor = "grey";
    }
}

function deleteAvailable()
{
    if(pr.value.trim()!== "" && nm.value.trim() !== "")
    {
        b2.disabled = false;
        b2.style.backgroundColor = "red";
    }

    else
    {
        b2.disabled = true;
        b2.style.backgroundColor = "grey";
    }
}

b2.addEventListener("click", () =>
{
inputs.forEach(input => input.value="");
generateAvailable();
deleteAvailable();
    pr.readOnly = false;
    nm.readOnly = false;
});



function genarateButton()
{
    const  d = new Date();
    let year = d.getFullYear();
    if (pr.value.length !== "" || nm.value.length !== "")
    {
        ml.disabled = false;
        ml.style.backgroundColor = "#526D82";
        ml.value = pr.value[0] + nm.value + year + "@gmail.com";
        pr.readOnly = true;
        nm.readOnly = true;
    }

    else
    {
        ml.disabled = true;
    }
}


function deleteGenerate()
{
    if (ml.value.length == "")
    {
        ml.disabled = true;
        ml.style.backgroundColor = "white";
    }

    min();
    colorReset()
}

function maj()
{
    var labels = document.querySelectorAll("label");
    {
        labels.forEach(label =>
        {
            label.textContent = label.textContent.toUpperCase();
        });
    }
}

function min()
{
    var labels = document.querySelectorAll("label");
    {
        labels.forEach(label =>
        {
            label.textContent = label.textContent.toLowerCase();
        });
    }
}


function color()
{
    var labels = document.querySelectorAll("label");
    {
        labels.forEach(label =>
        {
            label.style.color = "black";
        });
    }
}

function colorReset()
{
    var labels = document.querySelectorAll("label");
    {
        labels.forEach(label =>
        {
            label.style.color = "yellow";
        });
    }
}

b.addEventListener("click", genarateButton)
b.addEventListener("click", maj)
b.addEventListener("click", color)
b2.addEventListener("click", deleteGenerate)
