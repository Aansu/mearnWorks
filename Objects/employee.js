//objects
//Key Value pairs
//{key:value}

var employees={id:100,ename:"Arun",exp:3,sal:35000};
console.log(employees.id);     //fetch 1
console.log(employees["id"]);   //fetch 2
employees.sal=20000;           //updation
console.log(employees);
//check for gender key
if("gender" in employees)
{
    console.log("found");
}
else{
    console.log("not found");
}
//or
if(!("designation" in employees))
{
    console.log(" desig not found");
}
//or
console.log("gender" in employees);
console.log("sal" in employees);
//Adding a new pair
employees["gender"]="male";
console.log(employees);

//deducting the salary by 1000 
employees.sal-=1000;//or employees.sal=employees.sal-1000
console.log(employees);