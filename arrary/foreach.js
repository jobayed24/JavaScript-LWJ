const fruits = ["apple", "orange", "cherry"];
let iteratFruits=''
fruits.forEach(iteFor);
function iteFor(el){
    iteratFruits+=`<li> ${el} </li>`
}
document.getElementById('demo').innerHTML=`<ul>${iteratFruits}</ul>`