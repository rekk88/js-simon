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
    var t = setTimeout(function(){
        alert("timeout");

    },5000);
}


function rand(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
