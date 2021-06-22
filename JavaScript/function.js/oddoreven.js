//create a function to chk given num is odd or even
//if num is odd then true else false

// function numValidate(num)
// {
//     return num%2==0?false:true
// }
// console.log(numValidate(10));


//subtract value always positive
// function sub(num1,num2)
// {
//     // if(num1<num2)
//     // {
//     //     return num2-num1;
//     // }
//     // else{
//     //    return num1-num2;
//     // } or 
//     return num1-num2?num2-num1:num1-num2 ;

// }
// console.log(sub(6,10));


var arr1=[10,20,30];
var arr2=[78,89];
var result=[...arr1,...arr2];
console.log(result);

function addNumbers(...params){     //... is spread operator
let res=0;
for (let num of params)
{
    res+=num;
}
return res;
}
console.log(addNumbers(10,20));