let names = ['ankesh', 'govind'];

for(let name of names){
    console.log(name); 
}
console.log('---------------');

names.forEach(name => {
    console.log(name);

});

let numbers = [10, 20, 40, 50];
let x = numbers.map(num => {
    return num >= 30;
});

console.log(numbers.find(x => {
    return x >= 30
}));

