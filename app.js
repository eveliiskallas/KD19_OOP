// Window objects / methods / properties

// ALERT

// window.alert('Tere Hommikust!')
// alert('Tere Hommikust!')

// PROMT

// const sisend = prompt('Sisesta oma nimi');
// alert('Tere Hommikust, ' + sisend + '!');

//CONFIRM

// if(confirm ('Kas oled nõus?')){
//     console.log('Jah');
// } else {
//     console.log('Ei');
// }

// VÄLIMÕÕDUD

let valiKõrgus = window.outerHeight;
let valiLaius = window.outerWidth;

// console.log(valiKõrgus);
// console.log(valiLaius);

// SISEMÕÕDUD

let siseKõrgus = window.innerHeight;
let siseLaius = window.innerWidth;

// console.log(siseKõrgus);
// console.log(siseLaius);

// SCROLL 

// scrolY = window.scrollY;
// scrolX = window.scrollX;
// console.log(scrolY);
// console.log(scrolX);

// LOCATION 

let objekt = window.location;
let hostname = window.location.hostname;
let port = window.location.port;
let href = window.location.href;
let search = window.location.search;
console.log(objekt);
console.log(hostname);
console.log(port);
console.log(href);
console.log(search);

// REDIRECT 

// window.location.href = 'https://khk.ee';

// RELOAD 

// window.location.reload();