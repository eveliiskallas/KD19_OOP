// Local Storage 

class LS {
    loeRaamatud(){
        let raamatud;
    // kui raamatuid veel local storages ei eksisteeri
        if(localStorage.getItem('raamatud') === null){
        raamatud = [];
        } else {
        // kui on, siis need tuleb kätte saada 
        raamatud = JSON.parse(localStorage.getItem('raamatud'));
        }
        return raamatud;
    }
    salvestaRaamat(r){
        // loome raamatute hoidla local storages 
        // tekitame raamatute massiivi
        const raamatud = this.loeRaamatud();
        // lükkame uue raamatu andmed massiivi 
        raamatud.push(r);
        // lisame andmed local storagesse
        localStorage.setItem('raamatud', JSON.stringify(raamatud));
        console.log(raamatud);
    }
    kustutaRaamatLS(isbn){
        // vaatame, millised raamatud on olemas
        // loome kasutajaliidese objekti temaga opereerimiseks
        const kl = new KL();
        const raamatud = this.loeRaamatud();
        raamatud.forEach(function(raamat, index){
        // loeme andmed local storagest ühekaupa ja võrdleme 
        if(raamat.isbn === isbn){
            raamatud.splice(index, 1);
        }
    });
        // lisame andmed local storagesse 
        localStorage.setItem('raamatud', JSON.stringify(raamatud));
        // kinnitan kustutamist teate väljastamiseks 
        return true;
    }
}