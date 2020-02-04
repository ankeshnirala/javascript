'use strict'
const name = 'Ankesh';
console.log(name);

// name = 'Govind'
// console.log(name);       //give an error can't change const

let new_name = 'Govind';
console.log(new_name);

new_name = 'Ankesh';
console.log(new_name);      //can change let

//scoping rule for let

for(var i=0; i<5; i++){
    console.log(i);
    
}
console.log(i); //this is wrong, it should have to give error but it didn't

for (let p = 0; p < 5; p++) {
    console.log(p);
    
}
// console.log(p);     //it is giving error which is right


