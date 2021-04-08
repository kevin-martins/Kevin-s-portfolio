let message = "Ce (QuE),;:!? tU VEUx";
let cypt = '';
let range = 0;

crypt = message.split('').map(a => { 
    if ((a.charCodeAt() > 65 && a.charCodeAt() < 91 - range) ||
    (a.charCodeAt() > 97 && a.charCodeAt() < 123 - range)) {
        return String.fromCharCode(a.charCodeAt() + range);
    } else {
        return a;
    }
});

console.log(message);
console.log(crypt.join(''));