//Array Methods
let fruits = ['Apple', 'Banana', 'Grapes'];
console.log(fruits);

//to remove the last value 
fruits.pop();
console.log(fruits);

//to remove the first value 
fruits.shift();
console.log(fruits);

//to add the  value 
fruits.push('Mango');
console.log(fruits);

//to add value to be first 
fruits.unshift('WaterMeloon');
console.log(fruits);

//remove value from arrays
delete fruits[1];
console.log(fruits);
//to add to Value 1 (because we removed)
fruits[1]='Coconut';
console.log(fruits);

// To remove from one value to another value
fruits.splice(1,2);
console.log(fruits);

// To Create new array with 2 arrays 
let evenNumber =[2,4,6,8];
let oddNumber = [1,3,5,7];
let primeNumer =[0,10];
let allNumbers = oddNumber.concat(evenNumber,primeNumer);
console.log(allNumbers);
