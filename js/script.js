var min = 1;
var max = 100;
var random;
var numbers = [];
//genero 5 numeri random
for(var i=0 ; i < 5 ; i++){
    random = rand(min, max);
    numbers.push(random); 
}
console.log(numbers);
alert(numbers); //output di 5 numeri

timer();




function timer(){
    var n; 
    var nTrovati = []; //array dei numeri indovinati dall'utente

    var t = setTimeout(function(){
        // alert("timeout");
        alert("scrivi tutti e 5 i numeri !!")
        for(var i=0 ; i<5; i++){
            n = parseInt(prompt("inserisci numero : "));
            console.log(n);
            if(numbers.includes(n)){
                nTrovati.push(n);
            }
            else{
                console.log("numero non trovato");
            }
        }
        alert("hai indovinato " + nTrovati.length + " numeri  : " + nTrovati); //visualizzo quanti e quali numeri l'utente ha indovinato

    },5000);
}


function rand(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
