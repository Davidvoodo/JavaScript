///Arrys
let numbres = [1, 2, 3, 4, 5];
console.log(numbres);

let fruits = ['Apple', 'Banana', 'Grapes'];
console.log(fruits);
//Add Value to Arry 
fruits.push('Cherry');
console.log(fruits);

console.log(fruits.length);

//Print all value in Arrys For IN
let x;
for (x in fruits) {
    console.log(fruits[x]);
    x++;
}
//Print all value in Arrys For OF

for (x of fruits) {
    console.log(x);
}


let cars = new Array('Ford', 'Mercedes', 'Toyota');
console.log(cars);

//By Index
console.log(cars[0]);

cars[0] = 'Honda';
console.log(cars[0]);