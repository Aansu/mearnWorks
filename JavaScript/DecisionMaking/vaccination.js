 var num=9;
// if(num%15==0)
// {
//     console.log("fizbus");
// }
// else if(num%3==0)
// {
//     console.log("fiz");
// }
// else if(num%5 ==0){
//     console.log("buz");
// }

var res="";
if(num%3==0){
   res+="fiz";
}
if(num%5==0)
{
    res+="buz"
}
console.log(res);