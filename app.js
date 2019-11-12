// DOCUMENT METHODS - DOKUMENDI MEETODID
// SINGLE ELEMENT SELECTOR - ÜKSIKUTE ELEMENTIDE SELEKTOR

sisu = document.querySelector('#title'); // id järgi 
sisu = document.querySelector('.card-title'); // klassi järgi 
sisu = document.querySelector('h5'); // elemendi järgi 

// STIILI MUUTMINE
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue'; // Üksik selector
document.querySelector('li:last-child').style.color = 'red'; // Üksik selector

console.log(sisu);


