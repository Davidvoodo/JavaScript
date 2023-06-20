
//For Loops 
let i;

for (i = 1; i <= 5; i++) {
    console.log('Value of i is :' + i);
}

// For IN Loops
let fruits = ['Apple', 'Banana', 'Grapes'];
let x;

for (x in fruits) {
    console.log(fruits[x]);

}

// For OF Loops(without index)
for (x of fruits) {
    console.log(x);
}