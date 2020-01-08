class LS {
    loeYlesannet(){
        let ylesanded;
    // kui raamatuid veel local storages ei eksisteeri
        if(localStorage.getItem('ylesanded') === null){
        ylesanded = [];
        } else {
        // kui on, siis need tuleb kätte saada 
        ylesanded = JSON.parse(localStorage.getItem('ylesanded'));
        }
        return ylesanded;
    }
    salvestaYlesanne(r){
        // loome raamatute hoidla local storages 
        // tekitame raamatute massiivi
        const ylesanded = this.loeYlesannet();
        // lükkame uue raamatu andmed massiivi 
        ylesanded.push(r);
        // lisame andmed local storagesse
        localStorage.setItem('ylesanded', JSON.stringify(ylesanded));
        console.log(ylesanded);
    }
    kustutaYlesanneLS(task){
        // vaatame, millised raamatud on olemas
        // loome kasutajaliidese objekti temaga opereerimiseks
        const kl = new KL();
        const ylesanded = this.loeYlesannet();
        ylesanded.forEach(function(sisend, index){
        // loeme andmed local storagest ühekaupa ja võrdleme 
        if(sisend.ylesanne === task){
            ylesanded.splice(index, 1);
            
        }
    });
        // lisame andmed local storagesse 
        localStorage.setItem('ylesanded', JSON.stringify(ylesanded));
        // kinnitan kustutamist teate väljastamiseks 
        return true;
    }

} 
