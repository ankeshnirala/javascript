let arr = [1, 2, 3];

arr.push(5);
console.log(arr);

let _arr = arr;
console.log(arr);

//****************************

let __arr = [...arr, 5];
console.log(__arr);

// ---------------------------------------

let someValue = (... values) => {
    return console.log(values);
};

someValue("HI", "HELLO", 6);
