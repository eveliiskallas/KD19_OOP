// DOCUMENT 

let sisu;

sisu = document;  // sisu html'is
sisu = document.all; // html tagid kasutamisjärjekorras
sisu = document.all[2]; // konkreetne html tag
sisu = document.all.length; // palju on html tagi kasutusel
//DOKUMENDI OMADUSED
sisu = document.head; // loeb ainult head'i siseseid andmeid 
sisu = document.body; // loeb ainult body siseseid andmeid
sisu = document.doctype; // millist HTML versipooni kasutatakse
sisu = document.domain; // milline on domeen
sisu = document.URL; // näidatakse täis aadressit
sisu = document.characterSet; // millist meta andmestikku kasutatakse
sisu = document.contentType; // millist content type'i kasutatakse

console.log(sisu);