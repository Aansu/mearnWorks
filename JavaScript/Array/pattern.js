var arr=[4,5,6]; //op:[9,8,7]
var sum=0;
for(let num of arr)
{
    sum+=num;     
}
var newArr=[];
for(let num of arr)
{
    var res=sum-num;
    newArr.push(res);
}

console.log(newArr);


