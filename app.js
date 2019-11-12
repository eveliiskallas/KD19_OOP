// DOCUMENT METHODS - DOKUMENDI MEETODID
// SINGLE ELEMENT SELECTOR - ÜKSIKUTE ELEMENTIDE SELEKTOR

sisu = document.getElementById('title'); // html sisu 

id = document.getElementById('title').id; // id
klass = document.getElementById('title').className; // klass

// STIILI MUUTMINE
// sisu.style.background = '#333'; // stiili lisamine
document.getElementById('title').style.background = '#eee';
sisu.style.color = '#FFF';
sisu.style.padding = '5px';
sisu.style.display = 'none';

console.log(sisu);


