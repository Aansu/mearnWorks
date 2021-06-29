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


//Sort product upon aval qnty to ascending
var sortedA=products.sort((item1,item2)=>item1.aval_qty - item2.aval_qty);
console.log("Ascending order sort",sortedA);

//Sort product upon aval qnty to descending
var sortedD=products.sort((item1,item2)=>item2.aval_qty - item1.aval_qty);
console.log("Descending order sort",sortedD);

//sort based on name
var name_sort=products.map(item=>item.name).sort();
console.log(name_sort);