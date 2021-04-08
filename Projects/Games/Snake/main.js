var i = 0;
setInterval(incresing, 1000);

function incresing() {
    document.getElementById("score").innerHTML = i;
    i+=1;
}