class Person{
    m1(){
        console.log("Inside Person");
    }
}
class Child extends Person{
    m2(){
        console.log("Inside Child");
    }
}
class SubChild extends Child{
    m3(){
        console.log("Inside SubChild");
    }
}

var sub=new SubChild();
sub.m3();
sub.m2();

var chd=new Child();
chd.m2();
chd.m1();

var per=new Person();
per.m1();