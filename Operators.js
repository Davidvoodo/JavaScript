//Arithmetic Operators
let x = 5;
let y = 2;
//+ Addition
let result = x + y;
console.log('Resulat is :' + result)
//- Subtraction
result = x - y;
console.log('Resulat is :' + result)
//* Multiplication
result = x * y;
console.log('Resulat is :' + result)
/// Division
result = x / y;
console.log('Resulat is :' + result)
//% Modulus (Remainder of Division)
result = x % y;
console.log('Resulat is :' + result)
//** Exponential
result = x ** y;
console.log('Resulat is :' + result)
//++ Increment
let a = 10
a++
console.log('Resulat is of a  :' + a)
//-- Decrement
let b = 10
b++
console.log('Resulat is of a  :' + b)

//Assignment Operators
//= Assign 
let p = 55;
p = 4 + 25;
// += Add and assign
let t = 10;
t += 5;  // t= t+5 
// -=  Sub and assign
t -= 5;  // t= t-5  
// *=  Multiply and assign
t *= 5;  // t= t*5 
// /=  Divide and assign
t /= 5;  // t= t/5 
// %=  Modulus and assign
t %= 5;  // t= t%5 
// **= Exponential and assign
t **= 5;  // t= t**5 


//Comparison Operators
let v = 10;
let n = '10';
console.log(v == n);// == equal to  -will be True 
console.log(v === n);// === equal value and equal type  -will be false 
console.log(v != n);// != not equal to  -will be to false
console.log(v !== n);// !== not equal value and type  -will be true
console.log(v > n);// ＞ greater than  -will be False
console.log(v < n);// ＜ less than-will be False
console.log(v >= n);// ＞= greater than or equal  -will be True
console.log(v <= n);// ＜= less than or equal  -will be True

/*Ternary operator : like if-then-elae takes 3 arguments 
condition ? returan value  if true ab  : returan value  if false cd
*/
let ab = 10 ;
let cd = 11;
let result1 = ab > cd ? ab : cd 
comsole.log(result1)  



//Logical Operators(it's boolean only if 2 condition )
let A = true;
let B = false; 
console.log (A && B) // && - logical AND | True if both conditions are true
console.log (A || B) // ||  - logical OR | True if any of the condition is true
console.log (!A) // ! logical NOT| Will return true if the condition is false and vice versa

//Type Operators
let firstName= 'David';
console.log(typeof firstName) ;  // typeof -Returns the type of a variable-will retuemn srting 
console.log(typeof 123);         //will return number 
console.log(typeof true);            //will return boolean 

// instanceof-Returns true if an object is an instance of an object type 
let lastName = new String ('Mizrahi');
let num1 = new Number (123);
console.log(lastName instanceof String); //  will return true
console.log(num1 instanceof Number); //  will return true

