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
        console.log(JSON.stringify(ylesanded));
        const taskList = document.querySelector('#collection');
        if(localStorage.getItem('ylesanded') === null){
            ylesanded = '';
        } else {
            ylesanded = localStorage.getItem('ylesanded');
        }
        ylesanded = taskList.innerHTML;
        localStorage.setItem('ylesanded', ylesanded);
    }
    kustutaYlesanneLS(e){
        


        // taskList.innerHTML = '';

        if(e.target.parentElement.parentElement.classList.contains('kustuta')){
            if(confirm('Kas soovid kustutada Ülesanne?')) {
              e.target.parentElement.parentElement.remove();
              // update local storage 
              this.salvestaYlesanne();
            }
          }
        // vaatame, millised raamatud on olemas
        // loome kasutajaliidese objekti temaga opereerimiseks

        // const kl = new KL();
        // const ylesanded = this.loeYlesannet();
        // ylesanded.forEach(function(sisend, index){

        // loeme andmed local storagest ühekaupa ja võrdleme 

        // if(sisend.ylesanne === task){
        //     ylesanded.splice(index, 1);
            
        // }
    // });
        // lisame andmed local storagesse 
        localStorage.setItem('ylesanded', JSON.stringify(ylesanded));
        // kinnitan kustutamist teate väljastamiseks 
        return true;
    }

} 
