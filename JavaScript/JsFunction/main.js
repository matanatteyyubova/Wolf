// funksiya yartmaq 1-ci yol

// function Memmed(a=4,b=5) {
//     console.log(a*b);
// }

//  Memmed (5,7);


// (function Memmed() {
//  console.log("salam");
// })()


// funksiya yartmaq 2-ci yol

// const Memmed = function(){
//     console.log("Mehebbet");
// }
// Memmed();


// funksiya yartmaq 3-ci yol (Arrow Function)

let Memmed ;
let Memmed1 ;

 const btn1 = document.querySelector("button")
 
Memmed = () =>{
   document.querySelector(".first").innerHTML="Mehebbet"
}

 
Memmed1 = () =>{
    document.querySelector(".first").innerHTML="ferid"
 }

btn1.addEventListener('click', Memmed);
btn1.addEventListener('dblclick', Memmed1);

