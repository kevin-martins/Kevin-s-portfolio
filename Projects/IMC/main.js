var size = document.getElementById("size");
var weight = document.getElementById("weight")

var Psize = document.getElementById("PSize");
var Pweight = document.getElementById("PWeight");

var Vsize = document.getElementById("VSize");
var Vweight = document.getElementById("VWeight");
var Vresult = document.getElementById("VResult");

var info = document.getElementById("info");

Vsize.innerHTML = size.value + "cm";
Psize.style.width = 30 + "%";
Vweight.innerHTML = weight.value + "kg";
Pweight.style.width = 30 + "%";

size.oninput = function() {
    Vsize.innerHTML = this.value + "cm";
    console.log("1:", Psize.style.width);
    Psize.style.width = (this.value - 79) / 2.2 + "%";
    console.log("2:", Psize.style.width)
    IMC(this.value, +document.getElementById("VWeight").innerHTML.split("kg")[0]);
}

size.onmouseenter = function() {
    Psize.style.opacity = 1;
}

size.onmouseout = function() {
    Psize.style.opacity = .7;
}

weight.oninput = function() {
    Vweight.innerHTML = this.value + "kg";
    Pweight.style.width = ((this.value - 19) / 3.04) + "%";
    IMC(+document.getElementById("VSize").innerHTML.split("cm")[0], this.value);
}

weight.onmouseenter = function() {
    Pweight.style.opacity = 1;
}

weight.onmouseout = function() {
    Pweight.style.opacity = .7;
}

function IMC(size, weight) {
    newsize = size/100;
    var imc = weight / (newsize * newsize);
    Vresult.innerHTML = Math.round(imc);
    if (imc < 18.5) {
        info.innerHTML = "Insuffisance pondérale";
        info.style.color = "white";
    } else if (imc < 25) {
        info.innerHTML = "Corpulence normale";
        info.style.color = "darkorange";
    } else if (imc < 30) {
        info.innerHTML = "Surpoids";
        info.style.color = "crimson";
    } else if (imc < 35) {
        info.innerHTML = "Obésité modérée";
        info.style.color = "DarkOrchid";
    } else if (imc < 40) {
        info.innerHTML = "Obésité sévère";
        info.style.color = "violet";
    } else {
        info.innerHTML = "Obésité morbide";
        info.style.color = "fuchsia";
    }
}