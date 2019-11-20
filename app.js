// STORAGE 

// SALVESTAME VÄÄRTUSE 
// localStorage.setItem('eesnimi', 'Eveliis');
// localStorage.setItem('perenimi', 'Kallas');

// EEMALDAME VÄÄRTUSE
// localStorage.removeItem('nimi');

// LOEME VÄÄRTUST 
// const  eesnimi = localStorage.getItem('eesnimi');
// console.log(eesnimi);
// const  perenimi = localStorage.getItem('perenimi');
// console.log(perenimi);

// PUHASTAME STORAGE-i 
// localStorage.clear();

document.querySelector('form').addEventListener('submit', salvesta);

function salvesta(e){
    const UusYlesanne = document.getElementById('task').value;
    // localStorage.setItem('tasks', UusYlesanne);
    let ylesanded;
    if(localStorage.getItem('tasks') == null){
        ylesanded = [];
        console.log(ylesanded)
    } else {
        console.log('olemas, tuleb lugeda');
        ylesanded = JSON.parse(localStorage.getItem('tasks'));
        console.log(ylesanded);
    }
    localStorage.setItem('tasks', UusYlesanne);

}


