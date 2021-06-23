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