var num=123;
var res="";
while(num!=0)
{
let digit=num%10;
//console.log(res1);//3
res+=digit; //if not a empty string,then  res=(res*10 )+digit
num=Math.floor(num/10);
}
console.log(res);