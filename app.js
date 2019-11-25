// INIMESE KIRJELDUS OOP ABIL 
// klasside kasutamine 

class Isik {
    // konstruktor
    constructor(e, p, skp){
        this.eesnimi = e;
        this.perenimi = p;
        this.synnikuupaev = new Date(skp);
    }

    // tervitus meetod 
    tervitus(){
        return `Tere ${this.eesnimi} ${this.perenimi}`
    }

    // vanuse arvutamine 

    arvutaVanus(){
        const vahe = Date.now() - this.synnikuupaev.getTime();
        const vanus = new Date(vahe);
        return vanus.getUTCFullYear - 1970;
    }

    // abiellus 
    abiellus(uusPereNimi){
        this.perenimi = uusPereNimi;
    }


}

const kadi = new Isik('Kadi', 'Tamm', '07-30-1997');
kadi.abiellus('Vaher');
console.log(kadi.tervitus());
console.log(kadi.arvutaVanus());

 