let EmpDeatils = function (name, age) {
    this.name = name;
    this.age = age;

};


EmpDeatils.prototype.getName = function () {
    return this.name;
}

EmpDeatils.prototype.getAge = function () {
    return this.age;
}




let emp1 = new EmpDeatils('Johan',30);
let emp2 = new EmpDeatils('Peter',35);
console.log(emp1.getName());
console.log(emp1.getAge());
