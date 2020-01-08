document.addEventListener('DOMContentLoaded', ylesanneteTabel);

// raamatutetabeli funktsoon
function ylesanneteTabel(e){
    // loome kasutajaliidese objekti temaga opereerimiseks
    kl = new KL();
    // kutsume raamatute näitamise funktsiooni
    kl.naitaYlesannet();
};

document.getElementById('task-form').addEventListener('submit', lisaYlesanne);

// Raamatu lisamise funktsioon   
function lisaYlesanne(e){        
    const task = document.getElementById('task').value;

    // loome raamatud andmete põhjal 
    const ylesanne = new Ylesanne(task);

    // loome kasutajaliidese objekti temaga opereerimiseks
    const kl = new KL();

    // kui mingid andmed on puudu, siis anname märku 
    if(task == '' ){
        kl.teade('Lisa ülesanne!', 'invalid');
    } else {
        // muidu lisame sisestatud raamatu tabelisse 
        // lisame sisestatud raamatu tabelisse 
        kl.lisaYlesanneTabelisse(ylesanne);
        // loome LS objekti funktsiooni kutsumiseks 
        const ls = new LS();
        // lisame raamatu andmed  local storage'sse
        ls.salvestaYlesanne(ylesanne);
        // kl.teade('Raamat on lisatud tabelisse', 'valid');    
    };
    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();
}