var num1=10;
var num2=10;
var num3=10;
var res="";
if(num1>num2 & num1>num3)
{
    res+="Num1 is largest among three";
}
if(num2>num1 & num2>num3)
{
    res+="Num2 is largest among three";
}
if(num3>num1 & num3>num2)
{
    res+="Num3 is largest among three"; 
}
if(num3==num1 & num3==num2)
{
    res+="All are equal"; 
}

console.log(res);