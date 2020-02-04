//es5
let ankesh = ['Ankesh', 25];

let name = ankesh[0];
let age = ankesh[1];
console.log(name);
console.log(age);
console.log('---------------');

//es6
let _ankesh = ['Ankesh', 25];
let [name1, age1] = _ankesh;
console.log(name1);
console.log(age1);
console.log('----------------');

let __ankesh = {
    name2: 'Ankesh',
    age2: 25
};
let {name2, age2} = __ankesh; 
console.log(name2);


