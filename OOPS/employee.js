class Employee{
    constructor(id,name,designation,salary,experience){
        this.id=id;
        this.name=name;
        this.designation=designation;
        this.salary=salary;
        this.experience=experience;
    }
    printEmployee(){
        console.log(this.id,this.name,this.designation,this.salary,this.experience);
    }
}
//create 5 employee objects
var emp1=new Employee(1000,"Aansu","Developer",35000,3);
var emp2=new Employee(1001,"Nirupama","QA",15000,1);
var emp3=new Employee(1002,"Jacob","Developer",55000,4);
var emp4=new Employee(1003,"Ashok","Developer",75000,6);
var emp5=new Employee(1004,"Philip","QA",35000,3);
console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp4);
console.log(emp5);
//print highest salary employee

//sort employee acc with their exp

//chk whether any employee working as QA
