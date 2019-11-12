// DOCUMENT 

let sisu;

sisu = document;  // sisu html'is
sisu = document.all; // html tagid kasutamisjärjekorras
sisu = document.all[2]; // konkreetne html tag
sisu = document.all.length; // palju on html tagi kasutusel
// DOKUMENDI OMADUSED - OBJEKTI OMADUSED
sisu = document.head; // loeb ainult head'i siseseid andmeid 
sisu = document.body; // loeb ainult body siseseid andmeid
sisu = document.doctype; // millist HTML versipooni kasutatakse
sisu = document.domain; // milline on domeen
sisu = document.URL; // näidatakse täis aadressit
sisu = document.characterSet; // millist meta andmestikku kasutatakse
sisu = document.contentType; // millist content type'i kasutatakse (type/css)

// FORM ANDMED 
sisu = document.forms; //kõik vormid
sisu = document.forms[0]; // esimene vorm
sisu = document.forms[0].id; // esimese vormi id
sisu = document.forms[0].method; // esimese vormi meetod (get)
sisu = document.forms[0].action; 

// LINKIDE ANDMED
sisu = document.links; // kõik lingid
sisu = document.links[0]; // esimene link
sisu = document.links[0].className; // esimese klassi link
sisu = document.links[0].classList[1]; // klasside massiiv ja sealt elemendi lugemine

// PILDID
sisu = document.images;

//SCRIPTID
sisu = document.scripts;
sisu = document.scripts[0].getAttribute('src'); // materialized script 
sisu = document.scripts[1].getAttribute('src'); // lokaalne script

console.log(sisu);