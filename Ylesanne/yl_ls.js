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
        console.log(r);
        // lükkame uue raamatu andmed massiivi 
        ylesanded.push(r);
        // lisame andmed local storagesse
        localStorage.setItem('ylesanded', JSON.stringify(ylesanded));
    }
    kustutaYlesanneLS(e){

        const ylesanded = this.loeYlesannet();
        ylesanded.forEach(function(ylesanne, index){
            if(ylesanne.ylesanne === e){
                ylesanded.splice(index, 1);
            }
        });
        localStorage.setItem('ylesanded', JSON.stringify(ylesanded));
        
    }

} 
