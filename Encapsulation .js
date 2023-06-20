class Employee {

    setEmpDetalis(name, id, phoneNo) {
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;

    }

    getEmpName() {
        return this.name;
    }

    getEmpId() {
        return this.id;
    }

    getEmpPhoneNo() {
        return this.phoneNo;
    }
}

let emp1= new Employee();
emp1.setEmpDetalis('David',1001,9721234);
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpPhoneNo());