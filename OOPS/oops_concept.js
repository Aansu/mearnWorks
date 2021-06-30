//Object Oriented Programming[OOPS]

//Example:Construction of a building
//class--plan/design pattern/template
//object--building/ Real world entity
//reference--to perform operations Ex tv--- remote

//this keyword is used to point current class instance variable
//this.name in inside class
//reference name as outside class

//constructor--> initialisation of instance variable
// Automatically invoked during obj creation(new)
// using name as consturctor in js,class name in java n c++, __init__() in python 

//task
// class Student{
//     constructor(rol,name,course,total)//intialisation of instance variable
//     {
//     this.rol=rol;
//     this.name=name;
//     this.course=course;
//     this.total=total;
//     }

//     printDetails(){
//         console.log(this.rol,this.name,this.course,this.total);
//     }
// }
// var stud1=new Student(100,"ram","Btech",500);
// console.log(stud1.total);

// var stud2=new Student(200,"ravi","Btech",400);
// stud2.printDetails();

class Employee{
    setEmployee(eid,ename,salary,designation)
    {
        this.eid=eid;
        this.ename=ename;
        this.salary=salary;
        this.designation=designation;
    }

    printEmployee()
    {
        console.log(this.eid,this.ename,this.salary,this.designation);
    }
      
 }

 var emp1=new Employee(100,"Anu",25000,"Developer");
 emp1.printEmployee();
 console.log(emp1.eid);
 var emp2=new Employee(200,"Manu",35000,"Designer");
 emp2.printEmployee();


// class Person{

// }