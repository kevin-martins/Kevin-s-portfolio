const text = document.querySelector(".fancy");
const srtText = text.textContent;
const splitText = srtText.split("");
text.textContent = "";

for (let i=0; i < splitText.length; i++) {
    if (splitText[i] === ".") {
        text.innerHTML += "<span>" + "</span>" + "<br>"
    } else {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitText.length) {
        complete();
        return;
    }
}

var b = false

function complete() {
    clearInterval(timer)
    timer = null
}

$(document).ready(function () {

    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        if (b === true){
            document.body.classList.remove("stop-scrolling");
            b = false;
        } else {
            document.body.classList.add("stop-scrolling");
            b = true;
        }
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
        document.body.classList.remove("stop-scrolling");
        b = false;
    });

    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate( keyframes = {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, options = 1000);
    });

    $('#up').on('click', function(){
        $('html, body').animate( keyframes = {
            scrollTop: 0
        }, options = 1000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});