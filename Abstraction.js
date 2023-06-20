function Employee(name,age,baseSalary){
    this.name=name;
    this.age=age;
    this.baseSalary=baseSalary;
    let monthBouns = 1000 ; 

    let calculteFinalSalary =  function(){
        let finalSalary = baseSalary + monthBouns ;
        console.log('Final Salary is = ' + finalSalary);
        
    }

    this.getEmployeDetalis =function(){
        console.log('Name = ' + this.name  + ' | Age = ' + this.age );
        calculteFinalSalary();
    }

}

let emp1 = new Employee('Jhon',30,2000);
emp1.getEmployeDetalis();

