// INIMESE KIRJELDUS OOP ABIL 
// Objekt.prototype 
// inimese konstruktor

function Isik(e, p, skp){ //konstruktor - tegeleb antud objekti loomisega 
    this.eesnimi = e;
    this.perenimi = p;
    this.synnikuupaev = new Date(skp);
}
// väljasta täisnimi
Isik.prototype.taisNimi = function(){
    return `${this.eesnimi} ${this.perenimi}`;
}

// arvuta vanus 
Isik.prototype.arvutaVanus = function(){
    const vaheSekundites = Date.now() - this.synnikuupaev.getTime();
    const vanusDateKujul = new Date(vaheSekundites);
    const taisAasta = vanusDateKujul.getUTCFullYear();
    const vanus = taisAasta - 1970;
    return vanus;
}

// abiellumine
Isik.prototype.abiellus = function(uusPereNimi){
    this.perenimi = uusPereNimi;
}


const eveliis = new Isik('Eveliis', 'Kallas', '03-06-1998');
const nele = new Isik('Nele', 'Kallas',  '11-21-2008');
const kadi = new Isik('Kadi', 'Kana',  '06-15-1992');

kadi.abiellus('Vaher')
// console.log(kadi.taisNimi());
