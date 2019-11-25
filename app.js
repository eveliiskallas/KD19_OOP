// INIMESE KIRJELDUS OOP ABIL 
// inimese konstruktor

function Isik(n, skp){ //konstruktor 
    this.nimi = n;
    this.synnikuupaev = new Date(skp);

    // arvuta vanus 
    this.arvutaVanus = function(){
        const vaheSekundites = Date.now() - this.synnikuupaev.getTime();
        const vanusDateKujul = new Date(vaheSekundites);
        const taisAasta = vanusDateKujul.getUTCFullYear();
        const vanus = taisAasta - 1970;
        return vanus;
    }

}
const eveliis = new Isik('Eveliis', '03-06-1998');
const nele = new Isik('Nele', '11-21-2008');
console.log(eveliis.arvutaVanus());
console.log(nele.arvutaVanus());