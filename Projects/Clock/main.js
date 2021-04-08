var date = new  Date();

function GetMonth(show) {
    var month = date.getMonth();
    var newMonth = (month+1).toString();
    var tabEn = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var tabFr = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
    if (show == 'En') {
        return tabEn[month];
    } else if (show == 'Fr') {
        return tabFr[month];
    }
    return newMonth;
}

function GetDay(show) {
    var weekDay = date.getDay()-1;
    var tabEn = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday'];
    var tabFr = ['Lundi ', 'Mardi ', 'Mercredi ', 'Jeudi ', 'Vendredi ', 'Samedi ', 'Dimanche '];
    if (show == 'En') {
        return tabEn[weekDay];
    } else if (show == 'Fr') {
        return tabFr[weekDay];
    }
    return 
}

function GetNumericDay(show) {
    var day = date.getDate();
    var newDay = day.toString();
    if (show == 'En') {
        if (day == 1) {
            return day.toString() + 'st';
        } else if (day == 2) {
            return day.toString() + 'nd';
        } else if (day == 3) {
            return day.toString() + 'rd';
        } else {
            return day.toString() + 'th';
        }
    }
    return newDay.toString();
}

function showDate(show='En') {
    var year = date.getFullYear();
    if (show == 'En') {
        document.getElementById("date").innerHTML = GetDay(show) + ", " + GetMonth(show) + " " + GetNumericDay(show) + " " + year.toString();
        document.getElementById("text").innerHTML = "Press Enter to change the format."
    } else if (show == 'Fr') {
        document.getElementById("date").innerHTML = GetDay(show) + " " + GetNumericDay(show) + " " + GetMonth(show) + " " + year.toString();
        document.getElementById("text").innerHTML = "Appuyer sur Entrer pour changer le format."
    } else if (show == 'NumEn') {
        document.getElementById("date").innerHTML = GetMonth(show) + "/" + GetNumericDay(show) + "/" + year.toString();
        document.getElementById("text").innerHTML = "Press Enter to change the format."
    } else if (show == 'NumFr') {
        document.getElementById("date").innerHTML = GetNumericDay(show) + "/" + GetMonth(show) + "/" + year.toString();
        document.getElementById("text").innerHTML = "Appuyer sur Entrer pour changer le format."
    }
}

showDate();

var format = 1;
var start = true;

var min;

var secAngle;
var minAngle;
var hourAngle;

function InitTheClock() {
    min = date.getMinutes();
    secAngle = (date.getSeconds() + 1) * 6;
    minAngle = min * 6;
    hourAngle = date.getHours() * 30 + (min/2);
    //document.getElementById("second-needle").style.transform = "rotate("+secAngle.toString()+"deg)";
    document.getElementById("minute-needle").style.transform = "rotate("+minAngle.toString()+"deg)";
    document.getElementById("hour-needle").style.transform = "rotate("+hourAngle.toString()+"deg)";
    start = false;

}

function SetTheClock() {
    if (start == true) {
        InitTheClock();
    }
    if (secAngle % 366 == 0) {
        minAngle += 360/60;
        document.getElementById("minute-needle").style.transform = "rotate("+minAngle.toString()+"deg)";
        if (minAngle % 366 == 0) {
            hourAngle += 360/12;
            document.getElementById("hour-needle").style.transform = "rotate("+hourAngle.toString()+"deg)";
            if (hourAngle % 366 == 0) {
                showDate(lang);
            }
        }
    }
    document.getElementById("second-needle").style.transform = "rotate("+secAngle.toString()+"deg)";
    secAngle += 360/60;
}

document.body.onkeyup = function(key) {
    if(key.keyCode == 13 && format == 1){
        lang = 'Fr';
        format = 2;
    } else if (key.keyCode == 13 && format == 2) {
        lang = 'NumEn';
        format = 3;
    } else if (key.keyCode == 13 && format == 3) {
        lang = 'NumFr';
        format = 4;
    } else if (key.keyCode == 13 && format == 4) {
        lang = 'En';
        format = 1;
    }
    showDate(lang);
}

let timer = setInterval(SetTheClock, 1000);