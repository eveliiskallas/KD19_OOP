// INIMESE KIRJELDUS OOP ABIL 
// Prototüüpide pärilus 
// inimese konstruktor

function Isik(e, p){ //konstruktor - tegeleb antud objekti loomisega 
    this.eesnimi = e;
    this.perenimi = p;
}
// väljasta täisnimi
Isik.prototype.taisNimi = function(){
    return `${this.eesnimi} ${this.perenimi}`;
}

// kliendi konstruktor 

function Klient(e, p, tel, stat){
    Isik.call(this, e, p); // konstruktori laiendamine
    this.telefon = tel;
    this.staatus = stat;
}

// teiste meetodite/funktsioonide kasutamine 
Klient.prototype = Object.create(Isik.prototype);
Klient.prototype.constructor = Klient;

// määrame taisNimi funktsiooni Kliendi objektile 
Klient.prototype.taisNimi = function(){
    return `${this.eesnimi} ${this.perenimi} - Sinul on ${this.staatus} tase`;

}



const kadi = new Klient('Kadi', 'Tamm', '1234 5678', 'püsiklient');
console.log(kadi.taisNimi());

