//Polymorphism
//more than one forms
//method overloading and method overriding

//method overloading
//same method name and differnt no of parameters

// class Calculation{
//     add(){
//         console.log("no arg");
//     }
//     add(num1){
//         console.log("One arg");
//     }
//     add(num1,num2){
//         console.log("Two arg");
//     }
//     add(num1,num2,num3)
//     {
//         console.log("Three arg");
//     }
// }

// var calc=new Calculation();
// calc.add();
// calc.add(10);
// calc.add(10,29);
// calc.add(10,20,30);

//given o/p is recent one
//because in js only recent method are taken and we can rewrite it as spread operator(...args)

//Another Way
// class Calculation{
//     add(...args)
//     {
//         console.log("we can add many params with same name using spread operator");
//     }

// }
// var calc=new Calculation();
// calc.add(10,20,30);





//Method Overriding
//Two classes,Inheritance relationship,Same Method name,Same Signatures

class Parent{
    phone(){
        console.log("Samsung f41");
    }
}
class Child extends Parent{
    phone(){
        super.phone(); //Super keyword refers to parent,always inside child class
        console.log("Iphone");  //this phone method overrides the parent property, so Iphone gets printed as result
    }
    
}
var ch=new Child();
ch.phone();


//program of rectangle and shape
class Rectangle{
    area(...args){
     console.log("Area of rectangle",args[0]*args[1]);
    }

}
class Shape extends Rectangle{
    area(...args){
    super.area(args[0],args[1]); //super keyword refers to parent method
    console.log("Area of shape",args[2]*args[2]);
    }

}

var sh=new Shape();
sh.area(10,10,20);
var rect=new Rectangle();
rect.area(10,10);

//Document Object Model
//object Arrays