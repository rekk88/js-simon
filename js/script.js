var min = 1;
var max = 100;
var random;
for(var i=0 ; i <= 100 ; i++){
     random = rand(min, max);
     console.log(random);

}
console.log("secondo random");
// for(var i=0 ; i <= 100 ; i++){
//     random = rand();
//     console.log(random);

// }





function rand(max , min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function rand(){
//     return Math.floor(Math.random() * 100 + 1);
// }

