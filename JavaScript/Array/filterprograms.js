var arr=[3,4,5,6,7,8,9,10];
//find even numbers 
var even=arr.filter(num=>num%2==0);// gives true value only
console.log(even);


var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},
]

//print all products whose price<50
 var below_fifty=products.filter(item=>item.mrp<50);
 console.log(below_fifty);


 //print all produts available in range of 30-50
 var range=products.filter(item=>item.mrp>30 & item.mrp<50);
 console.log("Product range between 30 and 50 are",range);

 //print all products out of stocks
 var outofStock=products.filter(item=>item.aval_qty==0);
 console.log("Out of stock products are",outofStock);


 // arr =[4,3,2,7,8,9] then o/p :3 2 1 8 9 10 , >5 num-1  using array method
 arr =[4,3,2,7,8,9];
//  var cal=arr.map(num=>{
//     if(num>5){
//      return num+1;
//     } else{
//         return num-1;
//     }
//  });
//or
var cal=arr.map(num=>num>5?num+1:num-1);
 console.log(`The output of array ${arr} is ${cal}`);