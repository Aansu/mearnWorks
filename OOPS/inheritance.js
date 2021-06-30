//inheritance
// class Parent{
//     phone() //method
//     {
//         console.log("OnePlus 6");
//     }
// }
// class Child extends Parent{

// }

// var child=new Child();
// child.phone();


class Person{
    setPerson(name,age){
        this.name=name;
        this.age=age;

    }

    printPerson(){
        console.log(this.name,this.age);
    }
}

class Student extends Person{
    setStudent(rol,course){
        this.rol=rol;
        this.course=course;

    }
    printStudent(){
        console.log(this.rol,this.course);
    }
}

var student=new Student();
student.setPerson("Niru",25);
student.printPerson();
student.setStudent(10,"MTech");
student.printStudent();
