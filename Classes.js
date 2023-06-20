class Employee {

    constructor(name, id) {
        this.name = name
        this.id = id;
    }

}

let emp1 = new Employee('Jhon', 1001);
let emp2 = new Employee('Dav', 1002);
console.log('employee name :' + emp1.name + '  And  ' + 'employee id :' + emp1.id);
console.log('employee name :' + emp2.name + '  And  ' + 'employee id :' + emp2.id);