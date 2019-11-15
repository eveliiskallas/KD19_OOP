// DOCUMENT METHODS - DOKUMENDI MEETODID
// NODE OMADUSED JA MEETODID

let nimekiri = document.querySelectorAll('ul.collection');
let nimekirjaElement = document.querySelectorAll('li.collection-item')

console.log(nimekiri);
console.log(nimekirjaElement);

nimekiri = document.querySelector('ul.collection');
console.log(nimekiri);

sisu = nimekiri.childNodes;
sisu = nimekiri.childNodes[0];
sisu = nimekiri.childNodes[0].nodeName;
sisu = nimekiri.childNodes[5].nodeType;

/* 
erinevad node tüübid 
1 - element 
2 - attribute 
3 - tekst 
8 - kommentaar 
9 - dokument 
10 - doctype 
*/

sisu = nimekiri.children;
sisu = nimekiri.children[1];
nimekiri.children[1].textContent = 'Õpi Rohkem JavaScripti!'
sisu = nimekiri.children[2].children[0].id = 'katse';
console.log(sisu);
console.log(nimekiri.children[2].children[0]);

sisu = nimekiri.firstChild; // node type 
sisu = nimekiri.firstElementChild; // value

sisu = nimekiri.lastChild;  
sisu = nimekiri.lastElementChild;  

sisu = nimekiri.childElementCount; 

nimekirjaElement = document.querySelector('li.collection-item:nth-child(2)'); 
sisu = nimekirjaElement.parentNode;
sisu = nimekirjaElement.parentElement;
sisu = nimekirjaElement.parentElement.parentElement;

sisu = nimekirjaElement.nextSibling; // node type
sisu = nimekirjaElement.nextElementSibling; // value

sisu = nimekirjaElement.previousSibling;  
sisu = nimekirjaElement.previousElementSibling;  


console.log(sisu);

