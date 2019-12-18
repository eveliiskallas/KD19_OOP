document.getElementById('btn1').addEventListener('click', getTextData);
document.getElementById('btn2').addEventListener('click', getJsonData);

function getJsonData(){

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