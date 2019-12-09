// app_oop.js

// Raamat

class Raamat {
    constructor (a, p, i){
        this.autor = a;
        this.pealkiri = p;
        this.isbn = i;
    }
}
const raamat = new Raamat ('Tammsaare', 'Tõde ja Õigus', 1234); 
console.log(raamat);