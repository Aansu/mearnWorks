var arr=[10,11,12,13,45,50,78];
var elem=13;
var flag=0;
for(let num of arr)
{
    if(elem==num)
    {
        flag++;
        break;
    }
}
console.log(flag==0?"elem not found":"found");