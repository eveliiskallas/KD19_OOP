document.getElementById('btn1').addEventListener('click', getTextData);
document.getElementById('btn2').addEventListener('click', getJsonData);

function getJsonData(){
    fetch('text.json').then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let out = '';
        data.forEach(function(timetable){
            out = out + `<li>${timetable.õpetaja} - ${timetable.aine}</li>`;
            console.log(out);
        });
        document.getElementById('out').innerHTML = out;
    })
    .catch(function(error){
        console.log(error);
    })
}

// local text file 
function getTextData(){
    fetch('text.txt').then(function(res){
        return res.text(); // andmete küsimine 
    }) 
    .then(function(data){
        console.log(data);
        document.getElementById('out').innerHTML = data;
    })
    .catch(function(error){
        console.log(error);
    })
}