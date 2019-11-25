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


const eveliis = new Isik('Eveliis', 'Kallas', '03-06-1998');
const nele = new Isik('Nele', 'Kallas',  '11-21-2008');
console.log(eveliis);
console.log(nele.taisNimi());