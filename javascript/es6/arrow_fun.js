let first_name = 'Ankesh';
let last_name = 'Kumar';

//es5
let my_name = function() {
    return first_name+ ' ' +last_name 
}
console.log(my_name());


//es6
let full_name = () => {
    return first_name+ ' ' +last_name 
}

console.log(full_name());
