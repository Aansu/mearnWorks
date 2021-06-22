var products=[
    [100,"ricepowder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantasy",40,50],
    [103,"fifty-fifty",20,5],
    [104,"horlicks",200,5],
    [105,"complan",190,0],
    [106,"boost",250,10],
    [107,"maa",5,200]
]
//print number of product in the shop 8
// var count=0;
// for(let pro of products)
// {
//  count++;
// }
// console.log("Number of products in the shop is",count);

//print no of product in stock 7
// var count=0;
// for(let pro of products)
// {
//    if(pro[3]!=0)
//    {
// count++;
//    }  
// }
// console.log("Total products in stock",count);

//print costly produt
var costly;
for(let pro of products){

    costly=Math.max(pro[2]);
}
console.log("Costly product is",costly);










//print low cost product
//is there sny item available under rs 10 ? true
//print details of boost
