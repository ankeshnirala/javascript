let firstName = 'Ankesh';
let lastName = 'Kumar';
let yob = 1995;
let current_year = 2020;

function calAge(year){
    return current_year - year;
}

// es5
console.log('This is '+firstName+' '+lastName+' and i am '+ calAge(yob)+ ' years old.');

//es6
console.log(`This is ${firstName} ${lastName} and i'm ${calAge(yob)} year's old.`);

//es6 methods
let full_name = firstName+ ' ' +lastName;
console.log(full_name.startsWith('A'));
console.log(full_name.endsWith('r'));
console.log(full_name.includes(' '));
console.log(`${firstName} `.repeat(5));




