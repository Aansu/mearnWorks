//arrow function
let add=(num1,num2)=>num1+num2; //for addition
let cube=num=>num**3;
console.log(add(5,2));
console.log(cube(4));
let sub=(num1,num2)=>num1>num2?num1-num2:num2-num1;
console.log(sub(100,50));

//odd or even
let oddoreve=num=>num%2==0?"even":"odd";
console.log(oddoreve(6));

//Array methods=>map,filter,sort,some,find,foreach,reduce
//map()=>same no.of i/p n o/p then use map
//filter()=>conditions apply for i/p then use filter
 
//map
var arr=[3,4,5,6,7,8,9];// 3,4,5=>objects
var squares=arr.map(num=>num**2);
console.log(squares);
var cubes=arr.map(num=>num**3);
console.log(cubes);



//reduce()=> reduce to single value o/p
//max,min,sum-->possible
//reduce(p1,p2)
//reduce right-->especially for storing values in right side parameter
var arr=[3,4,2,8,7,9];
var total=arr.reduce((num1,num2)=>num1+num2);
console.log(total);

var max=arr.reduce((num1,num2)=>num1>num2?num1:num2);
console.log(max);

var min=arr.reduce((num1,num2)=>num1>num2?num2:num1);
console.log(min);


//sort()
var arr=[3,4,2,8,7,9];
var sorted=arr.sort((num1,num2)=>num1-num2);
console.log("Ascending order"+sorted);
var sorted_d=arr.sort((num1,num2)=>num2-num1);
console.log("Descending order"+sorted_d);

//find()
//first search displays in find method
//if more than one o/p use filter
//ex on product


//some()
//ex in product


//foreach

console.log("Normal iterate in order print each");
for(let num of arr)
{
    console.log(num);
}
//using foreach
console.log("using foreach order print each");
arr.forEach(num=>console.log(num));